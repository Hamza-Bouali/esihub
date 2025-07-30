'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FileText,
  Download,
  Eye,
  Heart,
  Share2,
  ArrowLeft,
  Building,
  GraduationCap,
  MapPin,
  User,
  Clock,
  Calendar,
  Award,
  Target,
  Code,
  TrendingUp,
  ExternalLink,
} from 'lucide-react'
import Link from 'next/link'
import { formatFileSize, formatDate } from '@/lib/utils'

interface ExtendedInternshipReport {
  id: string;
  title: string;
  description: string;
  studentName: string;
  studentId: string;
  filiere: string;
  year: number;
  company: string;
  companyLocation: string;
  supervisor: string;
  duration: string;
  internshipType: 'stage-technique' | 'stage-ouvrier' | 'pfe' | 'stage-initiation';
  reportFile?: {
    fileName: string;
    fileUrl: string;
    fileSize: number;
    fileType: string;
  };
  presentationFile?: {
    fileName: string;
    fileUrl: string;
    fileSize: number;
    fileType: string;
  };
  tags: string[];
  likes: number;
  downloads: number;
  views: number;
  isPublic: boolean;
  submittedAt: Date;
  approvedAt?: Date;
  approvedBy?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  abstract?: string;
  objectives?: string[];
  technologies?: string[];
  achievements?: string[];
}

interface ReportDetailPageProps {
  report: ExtendedInternshipReport
}

export default function ReportDetailPage({ report }: ReportDetailPageProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: report.title,
        text: report.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // Show toast notification
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    // Implement like functionality
  }

  const handleDownload = (fileType: 'report' | 'presentation') => {
    const file = fileType === 'report' ? report.reportFile : report.presentationFile
    if (file) {
      // Simulate download
      window.open(file.fileUrl, '_blank')
    }
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      'pfe': 'Projet de Fin d\'Études',
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
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/reports" className="flex items-center space-x-2 text-blue-400 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
                <span>Retour aux rapports</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Partager
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                className={`border-red-400 text-red-400 hover:bg-red-400 hover:text-white ${
                  isLiked ? 'bg-red-400 text-white' : ''
                }`}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {isLiked ? 'Aimé' : 'Aimer'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title and Basic Info */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className={`${getTypeColor(report.internshipType)} text-white`}>
                        {getTypeLabel(report.internshipType)}
                      </Badge>
                      <Badge variant="outline" className="border-blue-400 text-blue-400">
                        {report.filiere}
                      </Badge>
                      <Badge variant="outline" className="border-gray-400 text-gray-300">
                        {report.year}
                      </Badge>
                      <Badge variant="outline" className="border-green-400 text-green-400">
                        {report.status === 'approved' ? 'Approuvé' : report.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-2xl leading-tight mb-4">
                      {report.title}
                    </CardTitle>
                    <CardDescription className="text-blue-200 text-base">
                      {report.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Abstract */}
            {report.abstract && (
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Résumé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 leading-relaxed">{report.abstract}</p>
                </CardContent>
              </Card>
            )}

            {/* Objectives */}
            {report.objectives && report.objectives.length > 0 && (
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Objectifs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {report.objectives.map((objective, index) => (
                      <li key={index} className="text-blue-200 flex items-start gap-2">
                        <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Technologies */}
            {report.technologies && report.technologies.length > 0 && (
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Technologies utilisées
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {report.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-900/50 text-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Achievements */}
            {report.achievements && report.achievements.length > 0 && (
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Réalisations et résultats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {report.achievements.map((achievement, index) => (
                      <li key={index} className="text-blue-200 flex items-start gap-2">
                        <Award className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Tags */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Mots-clés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {report.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-blue-400 text-blue-400">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Files */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Fichiers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {report.reportFile && (
                  <Button
                    onClick={() => handleDownload('report')}
                    className="w-full bg-green-600 hover:bg-green-700 justify-start"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <div className="text-left flex-1">
                      <div className="font-medium">Rapport de stage</div>
                      <div className="text-xs opacity-80">
                        PDF • {formatFileSize(report.reportFile.fileSize)}
                      </div>
                    </div>
                    <Download className="h-4 w-4" />
                  </Button>
                )}
                {report.presentationFile && (
                  <Button
                    onClick={() => handleDownload('presentation')}
                    className="w-full bg-purple-600 hover:bg-purple-700 justify-start"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    <div className="text-left flex-1">
                      <div className="font-medium">Présentation</div>
                      <div className="text-xs opacity-80">
                        PPTX • {formatFileSize(report.presentationFile.fileSize)}
                      </div>
                    </div>
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Student Info */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informations étudiant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-blue-200">
                  <GraduationCap className="h-4 w-4" />
                  <span>{report.studentName}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Badge className="h-4 w-4" />
                  <span>{report.studentId}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Award className="h-4 w-4" />
                  <span>Filière {report.filiere}</span>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Informations entreprise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-blue-200">
                  <Building className="h-4 w-4" />
                  <span>{report.company}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <MapPin className="h-4 w-4" />
                  <span>{report.companyLocation}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <User className="h-4 w-4" />
                  <span>{report.supervisor}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <Clock className="h-4 w-4" />
                  <span>{report.duration}</span>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Statistiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-blue-200">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>J'aime</span>
                  </div>
                  <span className="font-medium">{report.likes}</span>
                </div>
                <div className="flex items-center justify-between text-blue-200">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    <span>Téléchargements</span>
                  </div>
                  <span className="font-medium">{report.downloads}</span>
                </div>
                <div className="flex items-center justify-between text-blue-200">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>Vues</span>
                  </div>
                  <span className="font-medium">{report.views}</span>
                </div>
              </CardContent>
            </Card>

            {/* Submission Info */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Informations de soumission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-blue-200">
                  <div className="font-medium mb-1">Date de soumission</div>
                  <div className="text-sm">{formatDate(report.submittedAt)}</div>
                </div>
                {report.approvedAt && (
                  <div className="text-blue-200">
                    <div className="font-medium mb-1">Date d'approbation</div>
                    <div className="text-sm">{formatDate(report.approvedAt)}</div>
                  </div>
                )}
                {report.approvedBy && (
                  <div className="text-blue-200">
                    <div className="font-medium mb-1">Approuvé par</div>
                    <div className="text-sm">{report.approvedBy}</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
