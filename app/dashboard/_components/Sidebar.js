"use client"

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Layout, Shield } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import UploadPdfDialog from './UploadPdfDialog'
import { api } from '@/convex/_generated/api'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs"; // or however you use auth
import { useQuery } from "convex/react";

const Sidebar = () => {     
 
const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  });

  const [pdfUploadAllowance, setPdfUploadAllowance] = useState(0);

  useEffect(() => {
    if (!user) return;

    // Default starting allowance
    let baseAllowance = 5;

    // Get last allowance date from localStorage
    let lastAllowanceDateStr = localStorage.getItem("lastAllowanceDate");
    let lastAllowanceDate = lastAllowanceDateStr
      ? new Date(lastAllowanceDateStr)
      : null;

    let now = new Date();

    let allowanceBonus = 0;

    if (lastAllowanceDate) {
      let timeDiff = now.getTime() - lastAllowanceDate.getTime(); // in ms
      let hoursPassed = timeDiff / (1000 * 60 * 60);

      if (hoursPassed >= 24) {
        allowanceBonus = 2;
        localStorage.setItem("lastAllowanceDate", now.toISOString());
      }
    } else {
      // First time user — set date
      localStorage.setItem("lastAllowanceDate", now.toISOString());
    }
    
  //  console.log(lastAllowanceDate.getTime().toString)


    setPdfUploadAllowance(baseAllowance + allowanceBonus);
    // console.log("Last Update:", (lastAllowanceDate || now).toISOString().slice(0, 10));
  }, []);

  return (
  <aside className="shadow-2xl mt-12 h-screen md:h-screen p-4 md:p-7 bg-white dark:bg-gray-900 w-full md:w-72 flex flex-col relative">
    <div className="mt-6 md:mt-10 flex-1 flex flex-col">
      <UploadPdfDialog isMaxFile={false}>
        <Button className="w-full">+ Upload PDF</Button>
      </UploadPdfDialog>
      <Link href={'/dashboard'}> 
      <div className="flex gap-2 items-center p-2 pt-10 md:p-7 mt-4 md:mt-5 hover:bg-slate-200 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition">
        <Layout />
               <h2 className="text-base md:text-lg">Workspace</h2>
      </div>
      </Link>

    </div>

    {/* <div className="w-full md:w-[80%] mx-auto absolute bottom-24 left-0 right-0 px-2 md:px-0">
      <Progress value={(fileList?.length / (pdfUploadAllowance) ) * 100} />
      <p className="text-xs md:text-sm mt-1 text-center">
        {fileList?.length} out of {pdfUploadAllowance > 4 ? pdfUploadAllowance : pdfUploadAllowance} Pdf Uploaded
      </p>
      <p className="md:text-sm text-gray-900 mt-2 text-center">
        Every Day You Can Upload +2 PDFs
      </p>
    </div> */}
  </aside>
)
}

export default Sidebar