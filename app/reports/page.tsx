import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import InternshipReportsPage from '@/components/internship-reports/internship-reports-page'

export const metadata: Metadata = generatePageMetadata({
  title: 'Rapports de Stage',
  description: 'Collection de rapports de stage et PFE des lauréats ESI. Trouvez l\'inspiration pour votre propre stage.',
  path: '/reports',
})

export default function ReportsPage() {
  return <InternshipReportsPage />
}
