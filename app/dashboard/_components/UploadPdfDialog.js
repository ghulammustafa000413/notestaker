"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAction, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Loader2Icon } from 'lucide-react'
import uuid4 from 'uuid4'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { toast } from 'sonner'



const UploadPdfDialog = ({ children, isMaxFile }) => {

    const AddFileEntryDb = useMutation(api.fileStorage.AddFileEntryDb)
    const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
    const getFileUrl = useMutation(api.fileStorage.getFileUrl)
    const [file, setFile] = useState();
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState()
    const { user } = useUser();
    const embeddDocument = useAction(api.myAction.ingest)


    const OnFileSelect = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
        } else {
            setFile(undefined);
            alert("Please select a PDF file.");
        }
    }

    const OnUpload = async () => {
        if (!fileName) {
            alert("Please enter a file name.");
            return;
        }

        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        setLoading(true)

        try {
            // console.log("Starting upload process...");

            // Step 1: Get a short-lived upload URL
            const postUrl = await generateUploadUrl();
            // console.log("Upload URL generated:", postUrl);

            // Step 2: POST the file to the URL
            const result = await fetch(postUrl, {
                method: "POST",
                headers: { "Content-Type": file?.type },
                body: file,
            });

            if (!result.ok) {
                throw new Error(`Upload failed with status: ${result.status}`);
            }

            // console.log("File uploaded successfully");
            const { storageId } = await result.json();

            // console.log("StorageId:", storageId);
            const fileId = uuid4();

            // Step 3: Get file URL from storage
            let fileUrl = "";
            if (storageId) {
                fileUrl = await getFileUrl({ storageId: storageId });
                // console.log("File URL:", fileUrl);
            }

            // Step 4: Save to database
            // console.log("Saving to database...");
            const resp = await AddFileEntryDb({
                fileId: fileId,
                storageId: storageId || "",
                fileName: fileName,
                fileUrl: fileUrl,
                createdBy: user?.primaryEmailAddress?.emailAddress || "",
            });
            // console.log("Database response:", resp);

            // Step 5: Process PDF content (only if fileUrl is available)
            if (fileUrl) {
                try {
                    const headResp = await fetch(fileUrl, { method: "HEAD" });
                    if (!headResp.ok) {
                        throw new Error("PDF file not accessible at " + fileUrl);
                    }
                    // console.log("Processing PDF content...");
                    const ApiResp = await axios.get('/api/pdf-loader?pdfUrl=' + fileUrl);
                    // console.log("PDF processing response:", ApiResp.data.result);

                    await embeddDocument({
                        splitText: ApiResp.data.result,
                        fileId: fileId
                    });
                } catch (pdfError) {
                    console.error("PDF processing error:", pdfError);
                    // Continue even if PDF processing fails
                }
            }

            setLoading(false);
            setOpen(false);
            toast("File uploaded successfully!");
        } catch (error) {
            console.error("Upload error:", error);
            setLoading(false);
            alert("Upload failed: " + (error.message || "Unknown error"));
        }
    }
    return (
        <div>
            <Dialog open={open}>
                <DialogTrigger asChild >
                    <Button onClick={() => setOpen(true)} disabled={isMaxFile} className="w-full"> + Upload PDF File</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload Pdf File</DialogTitle>
                        <DialogDescription asChild>
                            <div className=''>
                                <h2 className='mt-5'> Select a file to Upload </h2>
                                <div className=' gap-2 rounded-md border p-5 '>
                                    <input type="file" className='font-bold text-zinc-700 w-[87%]' accept='application/pdf' onChange={(event) => OnFileSelect(event)} />
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="">File Name*</label>
                                    <Input placeholder="File Name" onChange={(e) => {
                                        setFileName(e.target.value)
                                    }} />
                                </div>
                                <div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="">
                        <DialogClose asChild>
                            <Button variant="outline" className="w-[87%]:sm" onClick={() => setOpen(false)}>Cancel</Button>
                        </DialogClose>
                        <Button className="w-[87%]:sm" onClick={() => { OnUpload() }} disabled={loading || isMaxFile}>
                            {
                                loading ? <Loader2Icon className='animate-spin' /> : "Upload"
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default UploadPdfDialog;