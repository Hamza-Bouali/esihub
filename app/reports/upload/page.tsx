import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import ReportUploadPage from '@/components/internship-reports/report-upload-page'

export const metadata: Metadata = generatePageMetadata({
  title: 'Partager mon rapport',
  description: 'Partagez votre rapport de stage ou PFE avec la communauté ESI.',
  path: '/reports/upload',
})

export default function UploadPage() {
  return <ReportUploadPage />
}
