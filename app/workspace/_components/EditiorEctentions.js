import { HeadingButton } from '@/components/tiptap-ui/heading-button'
import { chatSession } from '@/configs/AIModel'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
// import { ChatSession } from '@google/generative-ai'
import { useAction, useMutation } from 'convex/react'
import { Bold, Download, Italic, Sparkles } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'
import jsPDF from 'jspdf'

function EditiorEctentions({ editor, notes }) {

    const { fileId } = useParams();

    const SearchAI = useAction(api.myAction.search)
    const saveNotes = useMutation(api.notes.AddNotes)
    const { user } = useUser();




        const handleDownloadPDF = () => {
        if (!editor) return;
        const doc = new jsPDF();
        // Get plain text from editor
        const text = editor.getText();
        doc.text(text, 10, 10);
        doc.save('notes.pdf');
    };

    const onAiClick = async () => {
        toast("AI is getting your answer please wait few seconds...")
        const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        )
        // console.log("Selected text:", selectedText);
        // console.log("Selection from:", editor.state.selection.from, "to:", editor.state.selection.to);

        // If no text is selected, use a default query
        const queryText = selectedText.trim() || '';
        // console.log("Query to send:", queryText);

        const result = await SearchAI({
            query: queryText,
            fileId: fileId
        })

        // console.log("Unformated Result : ", result);

        const UnformattedAnswer = JSON.parse(result);
        let AllUnformatedAns = '';
        UnformattedAnswer && UnformattedAnswer.forEach(item => {
            AllUnformatedAns = AllUnformatedAns + item.pageContent
        });
        if (AllUnformatedAns == '' || AllUnformatedAns == []) {
            toast.error("No answer found for your query, please try again with different query.")

        } else {

            // console.log("Unformated Result : ", AllUnformatedAns);
            const PROMPT = `'system':"For any question please answer the user's question as you find answer from this content, the content is :"  ${AllUnformatedAns} " : please give appropriate answer in HTML format and please give correct answer from only this given content. User's Question is: 'user': "${selectedText}"`;
            try {
                const AiModelResult = await chatSession.sendMessage(PROMPT)
            const FinalAns = AiModelResult.response.text().replace('```', '').replace('html', '').replace("```", '')

            const AllText = editor.getHTML()
            editor.commands.setContent(AllText + ' <p><strong>Answer: </strong>' + FinalAns + '</p>')

            saveNotes({
                notes: editor.getHTML(),
                fileId: fileId,
                createdBy: user?.primaryEmailAddress?.emailAddress
            })
            } catch (e) {
                toast.error("Please Try Again after few seconds")

            }
            // console.log(AiModelResult.response.text())

        }
    }

    return editor && (
        <div className='pt-5 pl-5 flex gap-3 mt-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 w-full z-50  justify-center'>

            <div className="control-group">
                <div className="button-group">
                    <button
                        onClick={handleDownloadPDF}
                        className="hover:text-green-500"
                        // title="Download as PDF"
                    >
                        {/* You can use any icon, here's a simple text fallback */}
                        <Download className='w-3 m-1 text-slate-600 font-bold hover:cursor-pointer hover:bg-gray-200 rounded-4xl hover:text-black'/>
                    </button>
                </div>
            </div>

            <div className="control-group">
                <div className="button-group">

                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={editor.isActive('bold') ? '' : ''}
                    >
                        <Bold className='w-3 m-1 text-slate-600 font-bold hover:cursor-pointer hover:bg-gray-200 rounded-4xl hover:text-black' />
                    </button>
                </div>
            </div>
            <div className="control-group">
                <div className="button-group">
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={editor.isActive('italic') ? 'text-blue-500' : ''}
                    >
                        <Italic className='w-3 m-1 text-slate-600 font-bold hover:cursor-pointer hover:bg-gray-200 rounded-4xl hover:text-black' />
                    </button>

                </div>
            </div>
            <div className='flex text-red-500'>
                <div>
                    <HeadingButton className=".tex"
                        editor={editor}
                        level={1}
                        hideWhenUnavailable={true}
                    // showShortcut={true}
                    // onToggled={() => console.log(`Heading 1 toggled!`)}
                    />
                </div>
                <div>
                    <HeadingButton
                        editor={editor}
                        level={2}
                        hideWhenUnavailable={true}
                    // showShortcut={true}
                    // onToggled={() => console.log(`Heading 1 toggled!`)}
                    />
                </div>
                <div>
                    <HeadingButton
                        editor={editor}
                        level={3}
                        hideWhenUnavailable={true}
                    // showShortcut={true}
                    // onToggled={() => console.log(`Heading 1 toggled!`)}
                    />
                </div>
                <div>
                    <HeadingButton
                        editor={editor}
                        level={4}
                        hideWhenUnavailable={true}
                    // showShortcut={true}
                    // onToggled={() => console.log(`Heading 1 toggled!`)}
                    />
                </div>
                <div>
                    <HeadingButton
                        editor={editor}
                        level={5}
                        hideWhenUnavailable={true}
                    // showShortcut={true}
                    // onToggled={() => console.log(`Heading 1 toggled!`)}
                    />
                </div>
                <div>
                    <HeadingButton
                        editor={editor}
                        level={6}
                        hideWhenUnavailable={true}
                    // showShortcut={true}
                    // onToggled={() => console.log(`Heading 1 toggled!`)}
                    />
                </div>

                <div className="control-group">
                    <div className="button-group">
                        <button
                            onClick={() => onAiClick()}
                            className={"hover:text-blue-500"}
                        >
                            <Sparkles className='w-3 m-1 text-slate-600 font-bold hover:cursor-pointer hover:bg-gray-200 rounded-4xl hover:text-black' />
                        </button>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default EditiorEctentions
