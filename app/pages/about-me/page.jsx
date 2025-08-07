// pages/about.js
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">👋 About Me</h1>
        <p className="text-lg text-gray-600 mb-6">
          I’m <span className="text-blue-600 font-semibold">Ghulam Mustafa</span>, a passionate full-stack web & AI developer.
          Obsessed with crafting sleek, scalable, and AI-integrated digital experiences.
        </p>
        
        <div className="flex justify-center mb-8">
          <Image
            src="/profile.jpg" // Place your image in public folder
            width={150}
            height={150}
            alt="Ghulam Mustafa"
            className="rounded-full border-4 border-blue-500"
          />
        </div>

        <div className="text-left mt-10">
          <h2 className="text-2xl font-semibold mb-2 underline">Skills & Technologies</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>JavaScript, TypeScript, Python</li>
            <li>Next.js, React.js, Node.js, Express.js</li>
            <li>MongoDB, MySQL, Convex, Prisma</li>
            <li>AI Integration, OpenAI API, Groq, Tiptap, Chatbots</li>
            <li>Tailwind CSS, ShadCN, Material UI</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2 underline">What I Do</h2>
          <p className="text-gray-700">
            I build modern SaaS platforms using AI, cloud-based solutions, and intuitive UIs. From idea to deployment, I create apps that solve real-world problems.
            My current focus: <span className="font-semibold text-blue-600">AI PDF Notes App, AI YouTube Analyzer, and full-stack SaaS development</span>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2 underline ">Contact</h2>
          <p className="text-gray-700">
            You can reach me at: <a href="mailto:developerssphere" className="text-blue-600 underline">developerssphere@gmail.com</a><br />
            Contact No: <a href="/" target="_blank" rel="noreferrer" className="text-blue-600 underline">03476432011</a>
          </p>
        </div>
      </div>
    </div>
  )
}
