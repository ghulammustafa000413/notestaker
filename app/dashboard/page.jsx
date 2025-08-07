"use client"

import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useQuery } from 'convex/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {

  const { user } = useUser()

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress
  })
  // console.log(fileList)
  return (
    <div>
      <h2 className='text-sm'>Workspace</h2>

      <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-1 xl:grid-cols-5 gap-5 p-6 mt-10 ml-14 lg:ml-4'>
        {fileList?.length > 0
          ? fileList.map((file) => (
            <Link href={'/workspace/' + file.fileId} key={file.fileId}>
              <div className='flex p-0 lg:p-5 shadow-md rounded-md flex-col items-center justify-center border cursor-pointer'>
                <Image src={'/pdf.png'} alt="file" width={50} height={50} />
                <h2 className='mt-1 lg:mt-3 font-medium text-lg'>{file.fileName}</h2>
                {/* <h2>{file.createdBy}</h2> */}
              </div>
            </Link>
          ))
          : [1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className='bg-slate-200 rounded-md h-[130px]  animate-pulse'></div>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard;