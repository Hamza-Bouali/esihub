"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  GraduationCap,
  Calendar,
  FileText,
  Bell,
  User,
  TrendingUp,
  Download,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [user] = useState({
    name: "Ahmed Benali",
    email: "ahmed.benali@esi.ac.ma",
    matricule: "ESI2023001",
    filiere: "ICD",
    semestre: "S5",
    role: "Étudiant",
  })

  const [notifications] = useState([
    { id: 1, title: "Nouvelle note disponible", content: "Algorithmes Avancés", type: "grade", urgent: false },
    { id: 2, title: "Absence enregistrée", content: "Cours de Base de Données", type: "absence", urgent: true },
    { id: 3, title: "Document prêt", content: "Attestation de scolarité", type: "document", urgent: false },
  ])

  const [recentGrades] = useState([
    { module: "Algorithmes Avancés", note: 16.5, coefficient: 3, date: "2025-01-25" },
    { module: "Base de Données", note: 14.0, coefficient: 2, date: "2025-01-20" },
    { module: "Réseaux", note: 17.5, coefficient: 2, date: "2025-01-18" },
    { module: "Génie Logiciel", note: 15.0, coefficient: 3, date: "2025-01-15" },
  ])

  const [absences] = useState([
    { module: "Base de Données", count: 3, limit: 4, status: "warning" },
    { module: "Algorithmes", count: 1, limit: 4, status: "ok" },
    { module: "Réseaux", count: 2, limit: 4, status: "ok" },
    { module: "Génie Logiciel", count: 0, limit: 4, status: "ok" },
  ])

  const [documents] = useState([
    { id: 1, type: "Attestation de scolarité", status: "Prêt", date: "2025-01-28" },
    { id: 2, type: "Convention de stage", status: "En cours", date: "2025-01-25" },
    { id: 3, type: "Relevé de notes", status: "Soumis", date: "2025-01-24" },
  ])

  const calculateAverage = () => {
    const totalPoints = recentGrades.reduce((sum, grade) => sum + grade.note * grade.coefficient, 0)
    const totalCoeff = recentGrades.reduce((sum, grade) => sum + grade.coefficient, 0)
    return (totalPoints / totalCoeff).toFixed(2)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Prêt":
        return "bg-green-500"
      case "En cours":
        return "bg-yellow-500"
      case "Soumis":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getAbsenceColor = (status: string) => {
    switch (status) {
      case "warning":
        return "text-red-500"
      case "ok":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ESIHUB Dashboard</h1>
                <p className="text-sm text-blue-200">Bienvenue, {user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge className="ml-2 bg-red-500">{notifications.length}</Badge>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <User className="h-4 w-4 mr-2" />
                Profil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* User Info Card */}
        <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white text-2xl">{user.name}</CardTitle>
                <CardDescription className="text-blue-200">
                  {user.matricule} • {user.filiere} • {user.semestre}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-400">{calculateAverage()}</div>
                <div className="text-blue-200">Moyenne générale</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Notes récentes</p>
                  <p className="text-2xl font-bold text-white">{recentGrades.length}</p>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Absences totales</p>
                  <p className="text-2xl font-bold text-white">{absences.reduce((sum, abs) => sum + abs.count, 0)}</p>
                </div>
                <Calendar className="h-8 w-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Documents</p>
                  <p className="text-2xl font-bold text-white">{documents.length}</p>
                </div>
                <FileText className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Notifications</p>
                  <p className="text-2xl font-bold text-white">{notifications.length}</p>
                </div>
                <Bell className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="grades" className="data-[state=active]:bg-blue-600">
              Notes
            </TabsTrigger>
            <TabsTrigger value="absences" className="data-[state=active]:bg-blue-600">
              Absences
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-blue-600">
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Notifications */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notifications récentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{notif.title}</p>
                        <p className="text-blue-200 text-sm">{notif.content}</p>
                      </div>
                      {notif.urgent && <Badge variant="destructive">Urgent</Badge>}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Actions rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/courses">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Accéder aux cours
                    </Button>
                  </Link>
                  <Link href="/documents/request">
                    <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                      <FileText className="h-4 w-4 mr-2" />
                      Demander un document
                    </Button>
                  </Link>
                  <Link href="/grades">
                    <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Voir toutes les notes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="grades" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Notes récentes</CardTitle>
                <CardDescription className="text-blue-200">Moyenne générale: {calculateAverage()}/20</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">{grade.module}</p>
                        <p className="text-blue-200 text-sm">Coefficient: {grade.coefficient}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">{grade.note}/20</div>
                        <div className="text-blue-200 text-sm">{grade.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="absences" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Suivi des absences</CardTitle>
                <CardDescription className="text-blue-200">Limite: 4 absences par module</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {absences.map((absence, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-white font-medium">{absence.module}</p>
                        <div className={`flex items-center ${getAbsenceColor(absence.status)}`}>
                          {absence.status === "warning" ? (
                            <AlertTriangle className="h-4 w-4 mr-1" />
                          ) : (
                            <CheckCircle className="h-4 w-4 mr-1" />
                          )}
                          <span>
                            {absence.count}/{absence.limit}
                          </span>
                        </div>
                      </div>
                      <Progress value={(absence.count / absence.limit) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Mes demandes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{doc.type}</p>
                          <p className="text-blue-200 text-sm">{doc.date}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                          {doc.status === "Prêt" && (
                            <Button size="sm" variant="outline" className="border-white/20 text-white bg-transparent">
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Nouvelle demande</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Attestation de scolarité
                  </Button>
                  <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Convention de stage
                  </Button>
                  <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Relevé de notes
                  </Button>
                  <Button className="w-full justify-start bg-orange-600 hover:bg-orange-700">
                    <FileText className="h-4 w-4 mr-2" />
                    Autre document
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
