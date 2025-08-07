export const metadata = {
  title: "AI PDF Notes Taker | Convert, Summarize, and Organize PDFs with AI | Smart AI Notes from PDF Documents",
  description: "Use AI PDF Notes Taker to instantly convert your uploaded PDFs into smart, organized, and summarized notes. Built with cutting-edge AI and Next.js, this tool is perfect for students, researchers, and professionals who want to extract key insights from books, articles, and reports. Auto-generate clean summaries, extract main points, and organize your ideas efficiently using cloud-based storage and intelligent note structuring. Whether it's for study, research, or work, this AI-powered SaaS tool transforms bulky PDFs into concise, searchable notes. Save time, stay productive, and unlock the power of AI-enhanced learning and documentation.",
  keywords: "AI PDF Notes Taker, Convert PDF to Notes, AI Summarizer for PDFs, AI PDF Extractor, PDF Note Organizer, Next.js PDF SaaS, AI-Powered PDF Summarization, AI Study Notes, PDF to Smart Notes App, Cloud-Based PDF Summarizer, Notes from Books and Articles, AI Notes Generator from PDFs, Productivity SaaS for Students, PDF Summarizer App, Intelligent PDF Notes, Academic PDF Notes with AI, Research Paper Summarizer, Smart Notes from PDF"
};

export default function RootLayout({ children }) {
  return (
    <div className="mt-12">

      {children}
    </div>
  )
}