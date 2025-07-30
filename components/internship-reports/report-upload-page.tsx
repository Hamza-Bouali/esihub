'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/co                <CardTitle className="text-white">Type de stage *</CardTitle>
                    <select
                      id="internshipType"
                      value={formData.internshipType}
                      onChange={(e) => handleInputChange('internshipType', e.target.value)}
                      className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
                      required
                    >
                      <option value="stage-technique">Stage Technique</option>
                      <option value="stage-ouvrier">Stage Ouvrier</option>
                      <option value="pfe">Projet de Fin d&apos;Études</option>
                      <option value="stage-initiation">Stage d&apos;Initiation</option>card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Upload,
  FileText,
  ArrowLeft,
  GraduationCap,
  Building,
  User,
  Code,
  Save,
  Eye,
} from 'lucide-react'
import Link from 'next/link'

interface ReportFormData {
  title: string
  description: string
  studentName: string
  studentId: string
  filiere: string
  year: number
  company: string
  companyLocation: string
  supervisor: string
  duration: string
  internshipType: 'stage-technique' | 'stage-ouvrier' | 'pfe' | 'stage-initiation'
  abstract: string
  objectives: string[]
  technologies: string[]
  achievements: string[]
  tags: string[]
  isPublic: boolean
}

export default function ReportUploadPage() {
  const [formData, setFormData] = useState<ReportFormData>({
    title: '',
    description: '',
    studentName: '',
    studentId: '',
    filiere: '',
    year: new Date().getFullYear(),
    company: '',
    companyLocation: '',
    supervisor: '',
    duration: '',
    internshipType: 'stage-technique',
    abstract: '',
    objectives: [''],
    technologies: [''],
    achievements: [''],
    tags: [''],
    isPublic: true,
  })

  const [reportFile, setReportFile] = useState<File | null>(null)
  const [presentationFile, setPresentationFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ReportFormData, value: string | boolean | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: 'objectives' | 'technologies' | 'achievements' | 'tags', index: number, value: string) => {
    const newArray = [...formData[field]]
    newArray[index] = value
    setFormData(prev => ({ ...prev, [field]: newArray }))
  }

  const addArrayItem = (field: 'objectives' | 'technologies' | 'achievements' | 'tags') => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }))
  }

  const removeArrayItem = (field: 'objectives' | 'technologies' | 'achievements' | 'tags', index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index)
    setFormData(prev => ({ ...prev, [field]: newArray }))
  }

  const handleFileChange = (type: 'report' | 'presentation', file: File | null) => {
    if (type === 'report') {
      setReportFile(file)
    } else {
      setPresentationFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically:
      // 1. Upload files to storage
      // 2. Submit form data to API
      // 3. Redirect to success page or report detail
      
      console.log('Form submitted:', formData)
      console.log('Report file:', reportFile)
      console.log('Presentation file:', presentationFile)
      
      // Show success message
      alert('Rapport soumis avec succès! Il sera examiné avant publication.')
      
    } catch (error) {
      console.error('Error submitting report:', error)
      alert('Erreur lors de la soumission. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/reports" className="flex items-center space-x-2 text-blue-400 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
                <span>Retour aux rapports</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">REPORTESI</h1>
                <p className="text-sm text-blue-200">Partager mon rapport</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Partager votre rapport de stage</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Aidez les futurs stagiaires en partageant votre expérience. Votre rapport sera examiné avant publication.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Informations générales
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Informations de base sur votre rapport
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title" className="text-white">Titre du rapport *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Ex: Développement d'une application mobile..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="internshipType" className="text-white">Type de stage *</Label>
                    <select
                      id="internshipType"
                      value={formData.internshipType}
                      onChange={(e) => handleInputChange('internshipType', e.target.value)}
                      className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
                      required
                    >
                      <option value="stage-technique">Stage Technique</option>
                      <option value="stage-ouvrier">Stage Ouvrier</option>
                      <option value="pfe">Projet de Fin d'Études</option>
                      <option value="stage-initiation">Stage d'Initiation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description" className="text-white">Description courte *</Label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Décrivez brièvement votre stage en 2-3 phrases..."
                    className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-300 min-h-[80px]"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="abstract" className="text-white">Résumé détaillé</Label>
                  <textarea
                    id="abstract"
                    value={formData.abstract}
                    onChange={(e) => handleInputChange('abstract', e.target.value)}
                    placeholder="Résumé détaillé de votre travail..."
                    className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-300 min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Student Information */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informations étudiant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="studentName" className="text-white">Nom complet *</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange('studentName', e.target.value)}
                      placeholder="Prénom Nom"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="studentId" className="text-white">CNE/Numéro étudiant *</Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange('studentId', e.target.value)}
                      placeholder="2021IIR045"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="filiere" className="text-white">Filière *</Label>
                    <select
                      id="filiere"
                      value={formData.filiere}
                      onChange={(e) => handleInputChange('filiere', e.target.value)}
                      className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white"
                      required
                    >
                      <option value="">Sélectionner une filière</option>
                      <option value="IIR">IIR - Ingénierie Informatique et Réseaux</option>
                      <option value="SSI">SSI - Sécurité des Systèmes d'Information</option>
                      <option value="SID">SID - Systèmes d'Information et Données</option>
                      <option value="ISIC">ISIC - Ingénierie des Systèmes d'Information et de Communication</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-white">Année *</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                      min="2020"
                      max="2030"
                      className="bg-white/10 border-white/20 text-white"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Information */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Informations entreprise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white">Nom de l'entreprise *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="TechCorp Maroc"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyLocation" className="text-white">Localisation *</Label>
                    <Input
                      id="companyLocation"
                      value={formData.companyLocation}
                      onChange={(e) => handleInputChange('companyLocation', e.target.value)}
                      placeholder="Casablanca"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="supervisor" className="text-white">Encadrant *</Label>
                    <Input
                      id="supervisor"
                      value={formData.supervisor}
                      onChange={(e) => handleInputChange('supervisor', e.target.value)}
                      placeholder="M./Mme. Nom Prénom"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration" className="text-white">Durée *</Label>
                    <Input
                      id="duration"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      placeholder="4 mois"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Files Upload */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Fichiers
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Téléversez votre rapport et/ou votre présentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reportFile" className="text-white">Rapport (PDF)</Label>
                    <Input
                      id="reportFile"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange('report', e.target.files?.[0] || null)}
                      className="bg-white/10 border-white/20 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded file:px-3 file:py-1"
                    />
                    {reportFile && (
                      <p className="text-sm text-green-400 mt-1">
                        Fichier sélectionné: {reportFile.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="presentationFile" className="text-white">Présentation (PPTX/PDF)</Label>
                    <Input
                      id="presentationFile"
                      type="file"
                      accept=".pptx,.pdf"
                      onChange={(e) => handleFileChange('presentation', e.target.files?.[0] || null)}
                      className="bg-white/10 border-white/20 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:px-3 file:py-1"
                    />
                    {presentationFile && (
                      <p className="text-sm text-green-400 mt-1">
                        Fichier sélectionné: {presentationFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic Arrays */}
            {/* Technologies */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Technologies utilisées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={tech}
                      onChange={(e) => handleArrayChange('technologies', index, e.target.value)}
                      placeholder="Ex: React Native, Node.js..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                    {formData.technologies.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('technologies', index)}
                        className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                      >
                        Supprimer
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('technologies')}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  Ajouter une technologie
                </Button>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Mots-clés</CardTitle>
                <CardDescription className="text-blue-200">
                  Ajoutez des mots-clés pour faciliter la recherche
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {formData.tags.map((tag, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={tag}
                      onChange={(e) => handleArrayChange('tags', index, e.target.value)}
                      placeholder="Ex: Mobile, Web, IA..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                    {formData.tags.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeArrayItem('tags', index)}
                        className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                      >
                        Supprimer
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('tags')}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  Ajouter un mot-clé
                </Button>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Confidentialité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isPublic"
                    checked={formData.isPublic}
                    onChange={(e) => handleInputChange('isPublic', e.target.checked)}
                    className="rounded border-white/20 bg-white/10"
                  />
                  <Label htmlFor="isPublic" className="text-white">
                    Rendre ce rapport public pour la communauté ESI
                  </Label>
                </div>
                <p className="text-sm text-blue-200 mt-2">
                  Si décoché, seuls les administrateurs pourront voir votre rapport.
                </p>
              </CardContent>
            </Card>

            {/* Submit Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-white"
                asChild
              >
                <Link href="/reports">Annuler</Link>
              </Button>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Soumission en cours...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Soumettre le rapport
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
