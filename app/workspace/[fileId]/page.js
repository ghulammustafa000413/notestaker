"use client"

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader';
import PdfViewer from '../_components/PdfViewer';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import TextEditior from '../_components/TextEditior';
import EditiorEctentions from '../_components/EditiorEctentions';

const Workspace = () => {

    const {fileId} = useParams();
    const fileInfo = useQuery(api.fileStorage.GetFileRecord,{
        fileId:fileId
        
    })


    // useEffect(() => {
    //     if (fileInfo && fileInfo.length > 0) {
    //         console.log(fileInfo);
    //     }
    // }, [fileInfo]);

    // Get the first file record from the array
    const fileRecord = fileInfo && fileInfo.length > 0 ? fileInfo[0] : null;

    return (
        <div> 
            <WorkspaceHeader fileName={fileRecord?.fileName}/>
            <EditiorEctentions />
            <div className='grid lg:grid lg:grid-cols-2 '>
                <div>
                    {/* Text Editor */}
                    <TextEditior fileId={fileId} />
                </div>
                <div>
                    {/* Pdf Viewer */}
                    {fileRecord && fileRecord.fileUrl ? (
                        <PdfViewer fileUrl={fileRecord.fileUrl} />
                    ) : (
                        <div className="flex items-center justify-center lg:h-80 md:h-[40%] sm:h-[40%]">
                            <p className="text-gray-500">Loading PDF...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Workspace