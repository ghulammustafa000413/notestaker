import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";

import { action } from "./_generated/server.js";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { v } from "convex/values";
import { useParams } from "next/navigation.js";


export const ingest = action({
    args: {
        splitText: v.array(v.string()),
        fileId: v.string()
    },
    handler: async (ctx, args) => {
await ConvexVectorStore.fromTexts(
  args.splitText, 
  args.fileId,                                                           
  new GoogleGenerativeAIEmbeddings({
                apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
                model: "text-embedding-004", // 768 dimensions
                taskType: TaskType.RETRIEVAL_DOCUMENT,
                title: "Document title",
            }),
  { ctx }
);
        return "Completed"
    },
});

export const search = action({
  args:{
    query:v.string(),
    fileId:v.string()
  },
  handler: async (ctx,args) =>{
    const vectorStore = new ConvexVectorStore(new GoogleGenerativeAIEmbeddings({
                apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
                model: "text-embedding-004", // 768 dimensions
                taskType: TaskType.RETRIEVAL_DOCUMENT,
                title: "Document title",
            }), {ctx});                   
    // const resultOne = (await vectorStore.similaritySearch(args.query, 10))
    // .filter(q=>q.metadata.fileId==args.fileId);
    // console.log(resultOne)

      const ww = resultOne.filter(q => {
  // Join all values in metadata to reconstruct the fileId
  const metaString = Object.values(q.metadata).join('');
  return metaString === args.fileId;
});
// console.log("pooo: ", ww);

    return JSON.stringify(ww)
      
    // return JSON.stringify(resultOne)
  },
})


























// export const search = action({
//   args: {
//     query: v.string(),
//     fileId: v.string()
//   },
//   handler: async (ctx, args) => {
//     try {
//       const vectorStore = new ConvexVectorStore(
//         new GoogleGenerativeAIEmbeddings({
//           apiKey: 'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
//           model: "text-embedding-004",
//           taskType: TaskType.RETRIEVAL_DOCUMENT,
//           title: "Document title",
//         }),
//         { ctx }
//       );
//       const results = await vectorStore.similaritySearch(args.query, 10);
//       console.log("Raw search results:", results.map(r => r.metadata));
//       const filteredResults = results.filter(q => q.metadata?.fileId === args.fileId);
//       console.log("Filtered results:", filteredResults.map(r => r.metadata));
//       return filteredResults;
//     } catch (error) {
//       console.error("Search error:", error);
//       return [];
//     }
//   },
// });





// // export const search = action({
// //   args: {
// //     query: v.string(),
// //     fileId: v.string()
// //   },
// //   handler: async (ctx, args) => {
// //     try {
// //       console.log("Search called with query:", args.query, "fileId:", args.fileId);
      
// //       const vectorStore = new ConvexVectorStore(
// //         new GoogleGenerativeAIEmbeddings({
// //           apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// //           model: "text-embedding-004", // 768 dimensions
// //           taskType: TaskType.RETRIEVAL_DOCUMENT,
// //           title: "Document title",
// //         }), 
// //         { ctx }
// //       );

// //       // Search for more results to increase chances of finding matches
// // //       const results = await vectorStore.similaritySearch(args.query, 10);
// // //       console.log("Raw search results:", results);

// // //       // Temporarily return all results to see if search is working

// // //       const filteredResults = results.filter(q => q.metadata?.fileId === args.fileId);
      
// // //       const allResults = filteredResults.map(q => ({
// // //         pageContent: q.pageContent,
// // //         metadata: q.metadata
// // //       }));
      
// // //       console.log("Returning all results (no filtering):", allResults);
// // //       return allResults;
      
// //       // TODO: Re-enable filtering once we understand the metadata structure
     
// //       // Filter results by fileId and return all matching results
// //       const filteredResults = results
// //         .filter(q => {
// //           console.log("Checking metadata:", q.metadata);
// //           console.log("Expected fileId:", args.fileId);
          
// //           // Check if metadata has fileId property
// //           if (q.metadata && q.metadata.fileId) {
// //             console.log("Found fileId in metadata:", q.metadata.fileId);
// //             return q.metadata.fileId === args.fileId;
// //           }
          
// //           // For old data structure, check if the metadata contains the fileId as characters
// //           if (q.metadata && typeof q.metadata === 'object') {
// //             const metadataString = Object.values(q.metadata).join('');
// //             console.log("Metadata string from object values:", metadataString);
// //             console.log("Metadata keys:", Object.keys(q.metadata));
// //             console.log("Metadata values:", Object.values(q.metadata));
            
// //             // Try different approaches to match the fileId
// //             if (metadataString === args.fileId) {
// //               console.log("Matched by joining all values");
// //               return true;
// //             }
            
// //             // Check if any value matches the fileId
// //             const values = Object.values(q.metadata);
// //             if (values.includes(args.fileId)) {
// //               console.log("Matched by direct value");
// //               return true;
// //             }
            
// //             // Check if the fileId is a substring of the metadata string
// //             if (metadataString.includes(args.fileId)) {
// //               console.log("Matched by substring");
// //               return true;
// //             }
// //           }
          
// //           console.log("No match found");
// //           return false;
// //         })
// //         .map(q => ({
// //           pageContent: q.pageContent,
// //           metadata: q.metadata
// //         }));

// //       console.log("Filtered results:", filteredResults);
// //       return filteredResults;
      
      
// //     } catch (error) {
// //       console.error("Search error:", error);
// //       return [];
// //     }
// //   },
// // });



















































// // // export const search = action({
// // //   args: {
// // //     query: v.string(),
// // //     fileId: v.string()
// // //   },
// // //   handler: async (ctx, args) => {
// // //     try {
// // //       console.log("Search called with query:", args.query, "fileId:", args.fileId);
      
// // //       const vectorStore = new ConvexVectorStore(
// // //         new GoogleGenerativeAIEmbeddings({
// // //           apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// // //           model: "text-embedding-004", // 768 dimensions
// // //           taskType: TaskType.RETRIEVAL_DOCUMENT,
// // //           title: "Document title",
// // //         }),
// // //         { ctx }
// // //       );

// // //       console.log("Vector store created, searching...");
      
// // //       const results = await vectorStore.similaritySearch(args.query, 5);
// // //       console.log("Raw search results:", results);
      
// // //       // Fix the filtering logic to handle the metadata structure
// // //       const filteredResults = results.filter(q => {
// // //         console.log("Checking metadata:", q.metadata);
// // //         // Check if metadata has fileId property or if it's the old character-based structure
// // //         if (q.metadata && q.metadata.fileId) {
// // //           return q.metadata.fileId === args.fileId;
// // //         }
// // //         // For old data structure, check if the metadata contains the fileId as characters
// // //         if (q.metadata && typeof q.metadata === 'object') {
// // //           const metadataString = Object.values(q.metadata).join('');
// // //           return metadataString === args.fileId;
// // //         }
// // //         return false;
// // //       });
      
// // //       console.log("Filtered results:", filteredResults);

// // //       return filteredResults;
// // //     } catch (error) {
// // //       console.error("Search error:", error);
// // //       return [];
// // //     }
// // //   },
// // // });

// // // export const search = action({
// // //   args: {
// // //     query: v.string(),
// // //     fileId: v.string()
// // //   },
// // //   handler: async (ctx, args) => {
// // //     try {
// // //       const vectorStore = new ConvexVectorStore(
// // //         new GoogleGenerativeAIEmbeddings({
// // //           apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// // //           model: "text-embedding-004",
// // //           taskType: TaskType.RETRIEVAL_DOCUMENT,
// // //           title: "Document title",
// // //         }),
// // //         { ctx }
// // //       );

// // //       const results = await vectorStore.similaritySearch(args.query, 1);

// // //       // Map to plain objects
// // //       const filteredResults = results
// // //         .filter(q => {
// // //           if (q.metadata && q.metadata.fileId) {
// // //             return q.metadata.fileId === args.fileId;
// // //           }
// // //           if (q.metadata && typeof q.metadata === 'object') {
// // //             const metadataString = Object.values(q.metadata).join('');
// // //             return metadataString === args.fileId;
// // //           }
// // //           return false;
// // //         })
// // //         .map(q => ({
// // //           pageContent: q.pageContent,
// // //           metadata: q.metadata
// // //         }));

// // //       return filteredResults;
// // //     } catch (error) {
// // //       console.error("Search error:", error);
// // //       return [];
// // //     }
// // //   },
// // // });

// // export const search = action({
// //   args: {
// //     query: v.string(),
// //     fileId: v.string()
// //   },
// //   handler: async (ctx, args) => {
// //     try {
// //       console.log("Search called with query:", args.query, "fileId:", args.fileId);
      
// //       // Create a vector store instance (do NOT call fromTexts here)
// //       const vectorStore = new ConvexVectorStore(
// //         new GoogleGenerativeAIEmbeddings({
// //           apiKey: 'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// //           model: "text-embedding-004",
// //           taskType: TaskType.RETRIEVAL_DOCUMENT,
// //           title: "Document title",
// //         }),
// //         { ctx }
// //       );

// //       // Search for the most similar results (increase to 5 for better recall)
// //       const results = await vectorStore.similaritySearch(args.query,1);
// //       console.log("Raw search results:", results);

// //       // Temporarily return all results to see if search is working
// //       // const filteredResults = results.map(q => ({
// //       //   pageContent: q.pageContent,
// //       //   metadata: q.metadata
// //       // }));
      
// //       // console.log("Returning all results (no filtering):", filteredResults);
// //       // return filteredResults;

      
      
// //       // Filter by fileId in metadata (commented out for debugging)
      
// //       const filteredResults = results
// //         // .filter(q => {
// //         //   console.log("Checking metadata:", q.metadata);
// //         //   console.log("Expected fileId:", args.fileId);
          
// //         //   // Check if metadata has fileId property
// //         //   if (q.metadata && q.metadata.fileId) {
// //         //     console.log("Found fileId in metadata:", q.metadata.fileId);
// //         //     return q.metadata.fileId === args.fileId;
// //         //   }
          
// //           // For old data structure, check if the metadata contains the fileId as characters
// //         //   if (q.metadata && typeof q.metadata === 'object') {
// //         //     const metadataString = Object.values(q.metadata).join('');
// //         //     console.log("Metadata string from object values:", metadataString);
// //         //     console.log("Metadata keys:", Object.keys(q.metadata));
// //         //     console.log("Metadata values:", Object.values(q.metadata));
            
// //         //     // Try different approaches to match the fileId
// //         //     if (metadataString === args.fileId) {
// //         //       console.log("Matched by joining all values");
// //         //       return true;
// //         //     }
            
// //         //     // Check if any value matches the fileId
// //         //     const values = Object.values(q.metadata);
// //         //     if (values.includes(args.fileId)) {
// //         //       console.log("Matched by direct value");
// //         //       return true;
// //         //     }
            
// //         //     // Check if the fileId is a substring of the metadata string
// //         //     if (metadataString.includes(args.fileId)) {
// //         //       console.log("Matched by substring");
// //         //       return true;
// //         //     }
// //         //   }
          
// //         //   console.log("No match found");
// //         //   return false;
// //         // })
// //         .filter(q => {
// //           console.log("Checking metadata:", q.metadata);
// //           // Check if metadata has fileId property
// //           if (q.metadata && q.metadata.fileId) {
// //             return q.metadata.fileId === args.fileId;
// //           }
// //           // For old data structure, check if the metadata contains the fileId as characters
// //           if (q.metadata && typeof q.metadata === 'object') {
// //             const metadataString = Object.values(q.metadata).join('');
// //             console.log("Metadata string:", metadataString);
// //             console.log("Expected fileId:", args.fileId);
// //             return metadataString === args.fileId;
// //           }
// //           return false;
// //         })
// //         .map(q => ({
// //           pageContent: q.pageContent,
// //           metadata: q.metadata
// //         }));

// //       console.log("Filtered results:", filteredResults);

// //       return filteredResults;
      
// //     } catch (error) {
// //       console.error("Search error:", error);
// //       return [];
// //     }
// //   },
// // });

// // // // export const search = action({
// // //   args: {
// // //     query: v.string(),
// // //     fileId: v.string()
// // //   },
// // //   handler: async (ctx, args) => {
// // //     const vectorStore = new ConvexVectorStore(
        
// // //         new GoogleGenerativeAIEmbeddings({
// // //                 apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// // //                 model: "text-embedding-004", // 768 dimensions
// // //                 taskType: TaskType.RETRIEVAL_DOCUMENT,
// // //                 title: "Document title",
// // //             }),
        
// // //         { ctx });

// // //     const resultOne = (await vectorStore.similaritySearch(args.query, 1))
// // //     .filter(q => q.metadata.fileId==args.fileId);
// // //     console.log(JSON.stringify(resultOne));

// // // return JSON.stringify(resultOne);


// // //   },
// // // });


// // // export const search = action({
// // //   args: {
// // //     query: v.string(),
// // //     fileId: v.string()
// // //   },
// // //   handler: async (ctx, args) => {
// // //     const vectorStore = await ConvexVectorStore.fromTexts(
// // //     args.splitText, // Array of strings
// // //     args.splitText.map(() => ({ fileId: args.fileId })), // Array of metadata objects ✅
// // //     new GoogleGenerativeAIEmbeddings({
// // //         apiKey:'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// // //         model: "text-embedding-004",
// // //         taskType: TaskType.RETRIEVAL_DOCUMENT,
// // //         title: "Document title",
// // //     }),
// // //     { ctx }
// // // );

// // //     const resultOne = (await vectorStore.similaritySearch(args.query, 1))
// // //       .filter(q => q.metadata.fileId === args.fileId);

// // //     console.log(resultOne);

// // //     return resultOne;
// // //   },
// // // });



// // // export const search = action({
// // //   args: {
// // //     query: v.string(),
// // //     fileId: v.string()
// // //   },
// // //   handler: async (ctx, args) => {
// // //     // Load the existing vector store index
// // //     const vectorStore = await ConvexVectorStore.fromTexts(
// // //       new GoogleGenerativeAIEmbeddings({
// // //         apiKey: 'AIzaSyCziSmA8A1dGGCsHLRH0qZierY60VjmNT0',
// // //         model: "text-embedding-004",
// // //         taskType: TaskType.RETRIEVAL_DOCUMENT,
// // //         title: "Document title",
// // //       }),
// // //       { ctx }
// // //     );

// // //     // Search for the most similar result
// // //     const resultOne = (await vectorStore.similaritySearch(args.query, 1))
// // //       .filter(q => q.metadata.fileId === args.fileId);

// // //     console.log(resultOne);

// // //     return resultOne;
// // //   },
// // // });


