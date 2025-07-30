import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { redirect } from 'next/navigation'

export const metadata: Metadata = generatePageMetadata({
  title: 'Partager mon rapport',
  description: 'Partagez votre rapport de stage ou PFE avec la communauté ESI.',
  path: '/reports/upload',
})

export default function UploadPage() {
  // Redirect to main reports page since we now use modal
  redirect('/reports')
}
