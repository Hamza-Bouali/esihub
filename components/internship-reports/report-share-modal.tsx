'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Upload,
  FileText,
  X,
  GraduationCap,
  Building,
  User,
  Code,
  Save,
  Eye,
  CheckCircle,
} from 'lucide-react'

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

interface ReportShareModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReportShareModal({ isOpen, onClose }: ReportShareModalProps) {
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
  const [showSuccess, setShowSuccess] = useState(false)

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
      // 3. Show success message
      
      console.log('Form submitted:', formData)
      console.log('Report file:', reportFile)
      console.log('Presentation file:', presentationFile)
      
      // Show success state
      setShowSuccess(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
        onClose()
        // Reset form data
        setFormData({
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
        setReportFile(null)
        setPresentationFile(null)
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting report:', error)
      alert('Erreur lors de la soumission. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] mx-4 bg-slate-900 rounded-lg border border-white/20 overflow-hidden">
        {/* Success State */}
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
            <CheckCircle className="h-16 w-16 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Rapport soumis avec succès!</h3>
            <p className="text-blue-200 mb-4">
              Votre rapport a été soumis et sera examiné avant publication.
            </p>
            <p className="text-sm text-gray-400">
              Cette fenêtre se fermera automatiquement...
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Partager mon rapport</h2>
                  <p className="text-sm text-blue-200">Aidez la communauté ESI</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onClose}
                className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Informations générales
                      </CardTitle>
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
                            <option value="pfe">Projet de Fin d&apos;Études</option>
                            <option value="stage-initiation">Stage d&apos;Initiation</option>
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
                          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-300 min-h-[60px]"
                          required
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Student Information */}
                  <Card className="bg-white/5 border-white/10">
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
                            <option value="SSI">SSI - Sécurité des Systèmes d&apos;Information</option>
                            <option value="SID">SID - Systèmes d&apos;Information et Données</option>
                            <option value="ISIC">ISIC - Ingénierie des Systèmes d&apos;Information et de Communication</option>
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
                  <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Building className="h-5 w-5" />
                        Informations entreprise
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company" className="text-white">Nom de l&apos;entreprise *</Label>
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
                  <Card className="bg-white/5 border-white/10">
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

                  {/* Technologies */}
                  <Card className="bg-white/5 border-white/10">
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
                              ×
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
                        + Ajouter une technologie
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Privacy Settings */}
                  <Card className="bg-white/5 border-white/10">
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
                    </CardContent>
                  </Card>
                </form>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-4 p-6 border-t border-white/10">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-white"
              >
                Annuler
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Soumission...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Soumettre
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
