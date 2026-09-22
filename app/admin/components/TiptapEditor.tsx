'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'

export default function TiptapEditor({ content, onChange }: { content: string, onChange: (val: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
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
      <div style={{display: "flex", alignItems: "center", gap: "4px", padding: "12px 16px", borderBottom: "1px solid var(--line)", background: "#FBFAF6", flexWrap: "wrap"}}>
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('bold') ? '#E7ECF3' : 'none', fontSize: "14px", fontWeight: 800, color: "var(--navy-900)"}} title="Tebal (Bold)">B</button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('italic') ? '#E7ECF3' : 'none', fontSize: "14px", fontStyle: "italic", color: "var(--navy-900)"}} title="Miring (Italic)">I</button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('underline') ? '#E7ECF3' : 'none', fontSize: "14px", textDecoration: "underline", color: "var(--navy-900)"}} title="Garis Bawah (Underline)">U</button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('strike') ? '#E7ECF3' : 'none', fontSize: "14px", textDecoration: "line-through", color: "var(--navy-900)"}} title="Coret (Strikethrough)">S</button>
        
        <span style={{width: "1px", height: "20px", background: "var(--line)", margin: "0 6px"}}></span>
        
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive({ textAlign: 'left' }) ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}} title="Rata Kiri">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M21 6H3M15 12H3M17 18H3"></path></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive({ textAlign: 'center' }) ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}} title="Rata Tengah">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M21 6H3M19 12H5M21 18H3"></path></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive({ textAlign: 'right' }) ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}} title="Rata Kanan">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M21 6H3M21 12H9M21 18H3"></path></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('justify').run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive({ textAlign: 'justify' }) ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}} title="Rata Kiri Kanan (Justify)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M21 6H3M21 12H3M21 18H3"></path></svg>
        </button>
        
        <span style={{width: "1px", height: "20px", background: "var(--line)", margin: "0 6px"}}></span>

        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={{height: "32px", padding: "0 10px", border: "none", background: editor.isActive('heading', { level: 2 }) ? '#E7ECF3' : 'none', fontSize: "13px", fontWeight: 700, color: "var(--navy-900)"}} title="Judul (Heading 2)">H2</button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} style={{height: "32px", padding: "0 10px", border: "none", background: editor.isActive('heading', { level: 3 }) ? '#E7ECF3' : 'none', fontSize: "13px", fontWeight: 700, color: "var(--navy-900)"}} title="Subjudul (Heading 3)">H3</button>
        
        <span style={{width: "1px", height: "20px", background: "var(--line)", margin: "0 6px"}}></span>
        
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('bulletList') ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}} title="Daftar Berpoin">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} style={{width: "32px", height: "32px", border: "none", background: editor.isActive('orderedList') ? '#E7ECF3' : 'none', display: "flex", alignItems: "center", justifyContent: "center"}} title="Daftar Angka">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy-900)" strokeWidth="2"><path d="M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M4 12h1.5L4 14.5V15h2M4 18a1.5 1.5 0 0 1 2 0v1a1.5 1.5 0 0 1-2 0"></path></svg>
        </button>
      </div>
      <EditorContent editor={editor} style={{flex: 1, display: 'flex', flexDirection: 'column'}} />
    </div>
  )
}
