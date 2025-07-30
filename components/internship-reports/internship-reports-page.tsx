'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  FileText,
  Download,
  Eye,
  Heart,
  Share2,
  Search,
  Upload,
  Building,
  GraduationCap,
  MapPin,
  User,
  Clock,
  ExternalLink,
} from 'lucide-react'
import Link from 'next/link'
import { InternshipReport } from '@/types'
import { formatDate } from '@/lib/utils'

// Mock data - replace with real API call
const mockReports: InternshipReport[] = [
  {
    id: '1',
    title: 'Développement d\'une application mobile de gestion de stock',
    description: 'Stage de fin d\'études chez TechCorp Maroc portant sur le développement d\'une application mobile cross-platform pour la gestion de stock en temps réel.',
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
  },
  {
    id: '2',
    title: 'Mise en place d\'un système de cybersécurité',
    description: 'Stage technique chez CyberSecure Solutions portant sur l\'implémentation d\'un système de détection d\'intrusion et la sécurisation du réseau d\'entreprise.',
    studentName: 'Youssef El Mansouri',
    studentId: '2022SSI012',
    filiere: 'SSI',
    year: 2024,
    company: 'CyberSecure Solutions',
    companyLocation: 'Rabat',
    supervisor: 'M. Karim Bennani',
    duration: '3 mois',
    internshipType: 'stage-technique',
    reportFile: {
      fileName: 'rapport_stage_youssef_elmansouri.pdf',
      fileUrl: '/reports/rapport_stage_youssef_elmansouri.pdf',
      fileSize: 1876543,
      fileType: 'application/pdf',
    },
    tags: ['Cybersécurité', 'IDS', 'Firewall', 'Réseau'],
    likes: 18,
    downloads: 89,
    views: 198,
    isPublic: true,
    submittedAt: new Date('2024-05-10'),
    approvedAt: new Date('2024-05-15'),
    approvedBy: 'Prof. Aicha Bennani',
    status: 'approved',
    createdAt: new Date('2024-05-10'),
    updatedAt: new Date('2024-05-15'),
  },
  {
    id: '3',
    title: 'Analyse de données et Business Intelligence',
    description: 'Projet de fin d\'études chez DataAnalytics Pro sur la création d\'un dashboard de BI pour l\'analyse des ventes et la prédiction des tendances du marché.',
    studentName: 'Salma Idrissi',
    studentId: '2021SID089',
    filiere: 'SID',
    year: 2024,
    company: 'DataAnalytics Pro',
    companyLocation: 'Casablanca',
    supervisor: 'M. Rachid Tazi',
    duration: '4 mois',
    internshipType: 'pfe',
    reportFile: {
      fileName: 'rapport_pfe_salma_idrissi.pdf',
      fileUrl: '/reports/rapport_pfe_salma_idrissi.pdf',
      fileSize: 3456789,
      fileType: 'application/pdf',
    },
    presentationFile: {
      fileName: 'presentation_pfe_salma_idrissi.pptx',
      fileUrl: '/presentations/presentation_pfe_salma_idrissi.pptx',
      fileSize: 2134567,
      fileType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    },
    tags: ['Power BI', 'Python', 'Machine Learning', 'Data Analysis'],
    likes: 31,
    downloads: 203,
    views: 445,
    isPublic: true,
    submittedAt: new Date('2024-07-01'),
    approvedAt: new Date('2024-07-05'),
    approvedBy: 'Prof. Hassan Benali',
    status: 'approved',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-07-05'),
  },
]

export default function InternshipReportsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFiliere, setSelectedFiliere] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesFiliere = selectedFiliere === 'all' || report.filiere === selectedFiliere
    const matchesType = selectedType === 'all' || report.internshipType === selectedType
    const matchesYear = selectedYear === 'all' || report.year.toString() === selectedYear
    
    return matchesSearch && matchesFiliere && matchesType && matchesYear
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.likes - a.likes
      case 'downloads':
        return b.downloads - a.downloads
      case 'views':
        return b.views - a.views
      default:
        return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    }
  })

  const handleShare = async (report: InternshipReport) => {
    if (navigator.share) {
      await navigator.share({
        title: report.title,
        text: report.description,
        url: `${window.location.origin}/reports/${report.id}`,
      })
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/reports/${report.id}`)
      // Show toast notification
    }
  }

  const handleLike = (reportId: string) => {
    // Implement like functionality
    console.log('Liked report:', reportId)
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      'pfe': 'PFE',
      'stage-technique': 'Stage Technique',
      'stage-ouvrier': 'Stage Ouvrier',
      'stage-initiation': 'Stage d\'Initiation',
    }
    return labels[type as keyof typeof labels] || type
  }

  const getTypeColor = (type: string) => {
    const colors = {
      'pfe': 'bg-purple-500',
      'stage-technique': 'bg-blue-500',
      'stage-ouvrier': 'bg-green-500',
      'stage-initiation': 'bg-orange-500',
    }
    return colors[type as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">ESIHUB</h1>
                  <p className="text-sm text-blue-200">REPORTESI</p>
                </div>
              </Link>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Upload className="h-4 w-4 mr-2" />
              Partager mon rapport
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Rapports de Stage & PFE</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Découvrez les travaux des lauréats ESI et trouvez l'inspiration pour votre propre stage ou projet de fin d'études
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher par titre, entreprise, technologie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
            </div>
            <select
              value={selectedFiliere}
              onChange={(e) => setSelectedFiliere(e.target.value)}
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option value="all">Toutes les filières</option>
              <option value="IIR">IIR</option>
              <option value="SSI">SSI</option>
              <option value="SID">SID</option>
              <option value="ISIC">ISIC</option>
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option value="all">Tous les types</option>
              <option value="pfe">PFE</option>
              <option value="stage-technique">Stage Technique</option>
              <option value="stage-ouvrier">Stage Ouvrier</option>
              <option value="stage-initiation">Stage d'Initiation</option>
            </select>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option value="all">Toutes les années</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
            >
              <option value="recent">Plus récents</option>
              <option value="popular">Plus populaires</option>
              <option value="downloads">Plus téléchargés</option>
              <option value="views">Plus vus</option>
            </select>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{mockReports.length}</div>
            <div className="text-blue-200 text-sm">Rapports disponibles</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {mockReports.reduce((sum, report) => sum + report.downloads, 0)}
            </div>
            <div className="text-blue-200 text-sm">Téléchargements</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">
              {mockReports.filter(r => r.internshipType === 'pfe').length}
            </div>
            <div className="text-blue-200 text-sm">Projets PFE</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-orange-400">
              {new Set(mockReports.map(r => r.company)).size}
            </div>
            <div className="text-blue-200 text-sm">Entreprises partenaires</div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReports.map((report) => (
            <Card key={report.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getTypeColor(report.internshipType)} text-white`}>
                        {getTypeLabel(report.internshipType)}
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {report.filiere}
                      </Badge>
                      <Badge variant="outline" className="border-gray-400 text-gray-300">
                        {report.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg leading-tight mb-2">
                      {report.title}
                    </CardTitle>
                    <CardDescription className="text-blue-200 text-sm line-clamp-2">
                      {report.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Student & Company Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-blue-200">
                    <User className="h-4 w-4" />
                    <span>{report.studentName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Building className="h-4 w-4" />
                    <span>{report.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <MapPin className="h-4 w-4" />
                    <span>{report.companyLocation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-200">
                    <Clock className="h-4 w-4" />
                    <span>{report.duration}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {report.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-blue-900/50 text-blue-200">
                      {tag}
                    </Badge>
                  ))}
                  {report.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-gray-600 text-gray-300">
                      +{report.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-blue-300">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{report.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{report.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{report.views}</span>
                    </div>
                  </div>
                  <span>{formatDate(report.submittedAt)}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    asChild
                  >
                    <Link href={`/reports/${report.id}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir détails
                    </Link>
                  </Button>
                  {report.reportFile && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Rapport
                    </Button>
                  )}
                  {report.presentationFile && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Présentation
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare(report)}
                    className="text-blue-300 hover:text-white hover:bg-blue-600"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(report.id)}
                    className="text-red-300 hover:text-white hover:bg-red-600"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Aucun rapport trouvé</h3>
            <p className="text-blue-200">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  )
}
