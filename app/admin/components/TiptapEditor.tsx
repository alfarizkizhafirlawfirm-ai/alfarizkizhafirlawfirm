'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function TiptapEditor({ content, onChange }: { content: string, onChange: (val: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[300px]',
        style: 'flex: 1; padding: 22px 24px; font-size: 14.5px; line-height: 1.85; color: var(--ink); background: #FFFFFF;',
      },
    },
  })

  if (!editor) return null

  return (
    <div className="kotak-isi" style={{background: "#FFFFFF", border: "1px solid var(--line)", flex: 1, display: "flex", flexDirection: "column", minHeight: "380px"}}>
      <div style={{display: "flex", alignItems: "center", gap: "4px", padding: "12px 16px", borderBottom: "1px solid var(--line)", background: "#FBFAF6"}}>
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('bold') ? '#E7ECF3' : 'none', fontSize: "14px", fontWeight: 800, color: "var(--navy-900)"}}>B</button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('italic') ? '#E7ECF3' : 'none', fontSize: "14px", fontStyle: "italic", color: "var(--navy-900)"}}>I</button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={{height: "32px", padding: "0 10px", border: "none", background: editor.isActive('heading', { level: 2 }) ? '#E7ECF3' : 'none', fontSize: "13px", fontWeight: 700, color: "var(--navy-900)"}}>H2</button>
        <span style={{width: "1px", height: "20px", background: "var(--line)", margin: "0 6px"}}></span>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('bulletList') ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>
        </button>
      </div>
      <EditorContent editor={editor} style={{flex: 1, display: 'flex', flexDirection: 'column'}} />
    </div>
  )
}
