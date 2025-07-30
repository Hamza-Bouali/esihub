"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Download, Search, FileText, Video, ImageIcon, Archive, Star, Eye, Calendar } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFiliere, setSelectedFiliere] = useState("all")
  const [selectedSemestre, setSelectedSemestre] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filieres = [
    { value: "ICD", label: "ICD - Ingénierie des Connaissances et Données" },
    { value: "ICSD", label: "ICSD - Ingénierie des Connaissances et Systèmes Décisionnels" },
    { value: "IIN", label: "IIN - Ingénierie de l'Information Numérique" },
    { value: "ISITD", label: "ISITD - Ingénierie des Systèmes d'Information et Technologies Digitales" },
    { value: "ISSIC", label: "ISSIC - Ingénierie des Systèmes de Sécurité Informatique et Cybersécurité" },
    { value: "MsICS", label: "MsICS - Master en Ingénierie des Connaissances et Systèmes" },
  ]

  const courses = [
    {
      id: 1,
      title: "Algorithmes Avancés",
      type: "Cours",
      filiere: "ICD",
      semestre: "S5",
      professor: "Dr. Alami",
      size: "2.5 MB",
      downloads: 245,
      rating: 4.8,
      date: "2025-01-20",
      description: "Structures de données avancées et algorithmes de tri optimisés",
    },
    {
      id: 2,
      title: "TP Base de Données",
      type: "TP",
      filiere: "ICD",
      semestre: "S5",
      professor: "Prof. Benali",
      size: "1.8 MB",
      downloads: 189,
      rating: 4.6,
      date: "2025-01-18",
      description: "Travaux pratiques sur MySQL et conception de bases de données",
    },
    {
      id: 3,
      title: "Examen Réseaux 2024",
      type: "Examen",
      filiere: "ICD",
      semestre: "S4",
      professor: "Dr. Chakir",
      size: "0.8 MB",
      downloads: 156,
      rating: 4.9,
      date: "2024-06-15",
      description: "Examen final session juin 2024 avec correction",
    },
    {
      id: 4,
      title: "Machine Learning Fondamentaux",
      type: "Cours",
      filiere: "ICSD",
      semestre: "S5",
      professor: "Dr. Tazi",
      size: "4.2 MB",
      downloads: 298,
      rating: 4.7,
      date: "2025-01-22",
      description: "Introduction aux algorithmes d'apprentissage automatique",
    },
    {
      id: 5,
      title: "Projet Data Mining",
      type: "Projet",
      filiere: "ICSD",
      semestre: "S5",
      professor: "Prof. Idrissi",
      size: "3.1 MB",
      downloads: 167,
      rating: 4.5,
      date: "2025-01-15",
      description: "Cahier des charges et exemples de projets data mining",
    },
    {
      id: 6,
      title: "Sécurité Informatique",
      type: "Cours",
      filiere: "ISSIC",
      semestre: "S3",
      professor: "Dr. Mansouri",
      size: "2.9 MB",
      downloads: 203,
      rating: 4.8,
      date: "2025-01-19",
      description: "Principes de sécurité et cryptographie moderne",
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFiliere = selectedFiliere === "all" || course.filiere === selectedFiliere
    const matchesSemestre = selectedSemestre === "all" || course.semestre === selectedSemestre
    const matchesType = selectedType === "all" || course.type === selectedType

    return matchesSearch && matchesFiliere && matchesSemestre && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Cours":
        return <BookOpen className="h-4 w-4" />
      case "TP":
        return <FileText className="h-4 w-4" />
      case "Examen":
        return <Archive className="h-4 w-4" />
      case "Projet":
        return <Video className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cours":
        return "bg-blue-500"
      case "TP":
        return "bg-green-500"
      case "Examen":
        return "bg-red-500"
      case "Projet":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  ← Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">DOCESI</h1>
                <p className="text-sm text-blue-200">Bibliothèque de cours et ressources</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Rechercher des ressources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                <Input
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                />
              </div>

              <Select value={selectedFiliere} onValueChange={setSelectedFiliere}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Filière" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les filières</SelectItem>
                  {filieres.map((filiere) => (
                    <SelectItem key={filiere.value} value={filiere.value}>
                      {filiere.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSemestre} onValueChange={setSelectedSemestre}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Semestre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les semestres</SelectItem>
                  <SelectItem value="S1">S1</SelectItem>
                  <SelectItem value="S2">S2</SelectItem>
                  <SelectItem value="S3">S3</SelectItem>
                  <SelectItem value="S4">S4</SelectItem>
                  <SelectItem value="S5">S5</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="Cours">Cours</SelectItem>
                  <SelectItem value="TP">TP</SelectItem>
                  <SelectItem value="Examen">Examens</SelectItem>
                  <SelectItem value="Projet">Projets</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-blue-200">{filteredCourses.length} ressource(s) trouvée(s)</p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2">{course.title}</CardTitle>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={`${getTypeColor(course.type)} text-white`}>
                        {getTypeIcon(course.type)}
                        <span className="ml-1">{course.type}</span>
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-blue-200">
                        {course.filiere}
                      </Badge>
                      <Badge variant="outline" className="border-white/20 text-blue-200">
                        {course.semestre}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-blue-200">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-blue-200">
                    <span>Prof. {course.professor}</span>
                    <span>{course.size}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-blue-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {course.downloads}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(course.date).toLocaleDateString("fr-FR")}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="text-center py-12">
              <ImageIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Aucune ressource trouvée</h3>
              <p className="text-blue-200">Essayez de modifier vos critères de recherche</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
