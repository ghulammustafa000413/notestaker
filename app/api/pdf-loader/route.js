import { NextRequest, NextResponse } from "next/server"

import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// const pdfUrl = "https://decisive-curlew-198.convex.cloud/api/storage/06205395-30fb-4abd-8cd3-9d724cc5cd13"

export async function GET(req) {


    const reqUrl = req.url;
    const {searchParams} = new URL(reqUrl)
    const pdfUrl = searchParams.get('pdfUrl')

    // console.log(pdfUrl)
    // 1 Load the Pdf File
    const response = await fetch(pdfUrl)
    // console.log(response);

    const data = await response.blob();
    // console.log(data);
    const loader = new WebPDFLoader(data)
    // console.log(loader);
    const docs = await loader.load()
    // console.log(docs);


    let pdfTextContent = ''

    docs.forEach((doc) => {
        pdfTextContent = pdfTextContent + doc.pageContent;

    })

    // 2. Split the text into smaller Chunks


    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 20,
    });

    const output = await splitter.createDocuments([pdfTextContent]);

    let splitterList = [];

    output.forEach((doc)=>{
        splitterList.push(doc.pageContent)
    })

    return NextResponse.json({result: splitterList})
}
