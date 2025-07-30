import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReportDetailPage from '@/components/internship-reports/report-detail-page'

interface Props {
  params: {
    id: string
  }
}

// Mock data - replace with actual API call
const getReport = async (id: string) => {
  // Simulate API call
  const mockReports = [
    {
      id: '1',
      title: 'Développement d\'une application mobile de gestion de stock',
      description: 'Stage de fin d\'études chez TechCorp Maroc portant sur le développement d\'une application mobile cross-platform pour la gestion de stock en temps réel. Le projet implique l\'utilisation de React Native pour le frontend mobile, Node.js avec Express pour l\'API backend, et MongoDB comme base de données. L\'application permet aux gestionnaires de stock de suivre les inventaires, générer des rapports automatiques, et recevoir des alertes en temps réel.',
      studentName: 'Ahmed Benali',
      studentId: '2021IIR045',
      filiere: 'IIR',
      year: 2024,
      company: 'TechCorp Maroc',
      companyLocation: 'Casablanca',
      supervisor: 'Mme. Fatima Zahra',
      duration: '4 mois',
      internshipType: 'pfe',
      reportFile: {
        fileName: 'rapport_pfe_ahmed_benali.pdf',
        fileUrl: '/reports/rapport_pfe_ahmed_benali.pdf',
        fileSize: 2547896,
        fileType: 'application/pdf',
      },
      presentationFile: {
        fileName: 'presentation_pfe_ahmed_benali.pptx',
        fileUrl: '/presentations/presentation_pfe_ahmed_benali.pptx',
        fileSize: 1234567,
        fileType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      },
      tags: ['React Native', 'Node.js', 'MongoDB', 'Gestion de stock'],
      likes: 24,
      downloads: 156,
      views: 342,
      isPublic: true,
      submittedAt: new Date('2024-06-15'),
      approvedAt: new Date('2024-06-20'),
      approvedBy: 'Prof. Mohammed Alami',
      status: 'approved',
      createdAt: new Date('2024-06-15'),
      updatedAt: new Date('2024-06-20'),
      abstract: 'Ce projet de fin d\'études vise à développer une solution complète de gestion de stock pour les entreprises marocaines. L\'application mobile développée avec React Native offre une interface intuitive permettant aux gestionnaires de suivre leurs inventaires en temps réel, de générer des rapports détaillés et de recevoir des notifications automatiques lorsque les stocks atteignent des seuils critiques.',
      objectives: [
        'Conception et développement d\'une application mobile cross-platform',
        'Mise en place d\'une API REST sécurisée avec Node.js',
        'Intégration d\'un système de notifications en temps réel',
        'Création d\'un tableau de bord analytique pour les gestionnaires',
        'Implémentation d\'un système d\'authentification et d\'autorisation'
      ],
      technologies: [
        'React Native',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Socket.io',
        'JWT Authentication',
        'React Navigation',
        'Redux Toolkit'
      ],
      achievements: [
        'Réduction de 40% du temps de gestion des inventaires',
        'Amélioration de 60% de la précision des stocks',
        'Interface utilisateur moderne et responsive',
        'Système de notifications en temps réel opérationnel',
        'Architecture scalable et maintenable'
      ]
    }
  ]
  
  return mockReports.find(report => report.id === id)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const report = await getReport(params.id)
  
  if (!report) {
    return {
      title: 'Rapport non trouvé',
    }
  }

  return {
    title: `${report.title} - ${report.studentName}`,
    description: report.description,
    openGraph: {
      title: report.title,
      description: report.description,
      type: 'article',
      authors: [report.studentName],
    },
  }
}

export default async function ReportPage({ params }: Props) {
  const report = await getReport(params.id)

  if (!report) {
    notFound()
  }

  return <ReportDetailPage report={report} />
}
