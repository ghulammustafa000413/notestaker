import React from 'react'

const PdfViewer = ({fileUrl}) => {
  console.log(fileUrl)
  return (
    <div>
      <iframe src={fileUrl+"#toolbar=0"} height="100vh" width="100%" className=' mt-0 lg:mt-[16vh] sm:mt-0 md:mt-0  h-[30vh] lg:h-[84vh] sm:h-[50vh] md:h-[50vh]' />
    </div>
  )
}

export default PdfViewer