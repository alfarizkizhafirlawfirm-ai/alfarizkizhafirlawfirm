import { format, parseISO } from 'date-fns'
import { id } from 'date-fns/locale'

export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return ''
  try {
    const date = typeof dateString === 'string' ? parseISO(dateString) : new Date(dateString)
    return format(date, 'd MMM yyyy', { locale: id })
  } catch (error) {
    return ''
  }
}
