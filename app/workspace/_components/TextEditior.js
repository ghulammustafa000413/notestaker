                                   

import { Placeholder } from '@tiptap/extensions'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import EditiorEctentions from './EditiorEctentions';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function TextEditior({fileId}) {

    const notes = useQuery(api.notes.GetNotes,{
        fileId:fileId
    })

    console.log(notes);

    useEffect(() => {
        editor&&editor.commands.setContent(notes)
    }, [notes])
    

    const editor = useEditor({
        extensions: [StarterKit,
            Placeholder.configure({
                placeholder: "Start taking your notes..."
            })
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-[90vh] p-5'
            }
        },
        immediatelyRender: false,
    });

    if (!editor) return null; // <-- Add this line

    return (
        <div>
            <EditiorEctentions editor={editor} />
            <div className='overflow-scroll mt-[16vh] h-[54vh] lg:h-[84vh] sm:h-[50vh] md:h-[50vh]'>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}