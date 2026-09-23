'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton({
  children,
  pendingText = 'Memproses...',
  className,
  style,
  onClick
}: {
  children: React.ReactNode
  pendingText?: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={className}
      style={{ ...style, opacity: pending ? 0.7 : 1, cursor: pending ? 'not-allowed' : 'pointer' }}
      onClick={onClick}
    >
      {pending ? pendingText : children}
    </button>
  )
}
