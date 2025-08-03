"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  BarChart3,
  GraduationCap,
  Star,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function GradesPage() {
  // const [selectedSemester, setSelectedSemester] = useState("all")
  const [selectedYear, setSelectedYear] = useState("2024-2025")

  // Sample data - in real app this would come from API
  const semesterData = [
    {
      semester: "S1",
      average: 14.2,
      modules: [
        { name: "Mathématiques", grade: 15.5, coefficient: 3, credits: 6 },
        { name: "Algorithmique", grade: 16.0, coefficient: 3, credits: 6 },
        { name: "Architecture", grade: 12.5, coefficient: 2, credits: 4 },
        { name: "Anglais", grade: 14.0, coefficient: 1, credits: 2 },
      ],
    },
    {
      semester: "S2",
      average: 15.1,
      modules: [
        { name: "Structures de Données", grade: 16.5, coefficient: 3, credits: 6 },
        { name: "Base de Données", grade: 15.0, coefficient: 3, credits: 6 },
        { name: "Réseaux", grade: 14.5, coefficient: 2, credits: 4 },
        { name: "Communication", grade: 15.0, coefficient: 1, credits: 2 },
      ],
    },
    {
      semester: "S3",
      average: 15.8,
      modules: [
        { name: "Programmation Orientée Objet", grade: 17.0, coefficient: 3, credits: 6 },
        { name: "Systèmes d&apos;Exploitation", grade: 15.5, coefficient: 3, credits: 6 },
        { name: "Génie Logiciel", grade: 16.0, coefficient: 2, credits: 4 },
        { name: "Économie", grade: 14.5, coefficient: 1, credits: 2 },
      ],
    },
    {
      semester: "S4",
      average: 16.2,
      modules: [
        { name: "Intelligence Artificielle", grade: 17.5, coefficient: 3, credits: 6 },
        { name: "Sécurité Informatique", grade: 16.0, coefficient: 3, credits: 6 },
        { name: "Développement Web", grade: 15.5, coefficient: 2, credits: 4 },
        { name: "Management", grade: 16.0, coefficient: 1, credits: 2 },
      ],
    },
    {
      semester: "S5",
      average: 16.8,
      modules: [
        { name: "Machine Learning", grade: 18.0, coefficient: 3, credits: 6 },
        { name: "Big Data", grade: 16.5, coefficient: 3, credits: 6 },
        { name: "Cloud Computing", grade: 16.0, coefficient: 2, credits: 4 },
        { name: "Entrepreneuriat", grade: 17.0, coefficient: 1, credits: 2 },
      ],
    },
  ]

  const trendData = semesterData.map((sem) => ({
    semester: sem.semester,
    average: sem.average,
    target: 16.0,
  }))

  const modulePerformance = semesterData.flatMap((sem) =>
    sem.modules.map((mod) => ({
      module: mod.name,
      grade: mod.grade,
      semester: sem.semester,
      coefficient: mod.coefficient,
    })),
  )

  const radarData = [
    { subject: "Programmation", current: 16.5, target: 18, fullMark: 20 },
    { subject: "Mathématiques", current: 15.2, target: 16, fullMark: 20 },
    { subject: "Réseaux", current: 14.8, target: 16, fullMark: 20 },
    { subject: "Base de Données", current: 15.8, target: 17, fullMark: 20 },
    { subject: "IA/ML", current: 17.8, target: 18, fullMark: 20 },
    { subject: "Sécurité", current: 16.0, target: 17, fullMark: 20 },
  ]

  const gradeDistribution = [
    { range: "18-20", count: 8, color: "#10B981" },
    { range: "16-18", count: 15, color: "#3B82F6" },
    { range: "14-16", count: 12, color: "#F59E0B" },
    { range: "12-14", count: 5, color: "#EF4444" },
    { range: "10-12", count: 2, color: "#6B7280" },
  ]

  const currentAverage = semesterData.reduce((sum, sem) => sum + sem.average, 0) / semesterData.length
  const bestSemester = semesterData.reduce((best, current) => (current.average > best.average ? current : best))
  const improvementTrend = semesterData.length > 0 ? (semesterData[semesterData.length - 1]?.average ?? 0) - (semesterData[0]?.average ?? 0) : 0

  const getGradeColor = (grade: number) => {
    if (grade >= 16) return "text-green-400"
    if (grade >= 14) return "text-blue-400"
    if (grade >= 12) return "text-yellow-400"
    return "text-red-400"
  }

  const getPerformanceIcon = (grade: number) => {
    if (grade >= 16) return <CheckCircle className="h-4 w-4 text-green-400" />
    if (grade >= 14) return <Star className="h-4 w-4 text-blue-400" />
    if (grade >= 12) return <AlertTriangle className="h-4 w-4 text-yellow-400" />
    return <AlertTriangle className="h-4 w-4 text-red-400" />
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
                <h1 className="text-2xl font-bold text-white">NOTESI Analytics</h1>
                <p className="text-sm text-blue-200">Analyse détaillée de vos performances académiques</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-2025">2024-2025</SelectItem>
                  <SelectItem value="2023-2024">2023-2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Moyenne Générale</p>
                  <p className="text-3xl font-bold text-white">{currentAverage.toFixed(2)}</p>
                  <div className="flex items-center mt-1">
                    {improvementTrend > 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400 mr-1" />
                    )}
                    <span className={improvementTrend > 0 ? "text-green-400" : "text-red-400"}>
                      {improvementTrend > 0 ? "+" : ""}
                      {improvementTrend.toFixed(1)}
                    </span>
                  </div>
                </div>
                <GraduationCap className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Meilleur Semestre</p>
                  <p className="text-3xl font-bold text-white">{bestSemester.semester}</p>
                  <p className="text-green-400">{bestSemester.average.toFixed(1)}/20</p>
                </div>
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Objectif</p>
                  <p className="text-3xl font-bold text-white">16.0</p>
                  <p className={currentAverage >= 16 ? "text-green-400" : "text-yellow-400"}>
                    {currentAverage >= 16 ? "Atteint ✓" : `${(16 - currentAverage).toFixed(1)} restant`}
                  </p>
                </div>
                <Target className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Rang Estimé</p>
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-blue-400">sur 120</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Analytics */}
        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList className="bg-white/10 border-white/20">
            <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600">
              Évolution
            </TabsTrigger>
            <TabsTrigger value="comparison" className="data-[state=active]:bg-blue-600">
              Comparaison
            </TabsTrigger>
            <TabsTrigger value="modules" className="data-[state=active]:bg-blue-600">
              Modules
            </TabsTrigger>
            <TabsTrigger value="radar" className="data-[state=active]:bg-blue-600">
              Compétences
            </TabsTrigger>
            <TabsTrigger value="distribution" className="data-[state=active]:bg-blue-600">
              Distribution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Évolution des Moyennes par Semestre</CardTitle>
                <CardDescription className="text-blue-200">Progression de vos performances académiques</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    average: {
                      label: "Moyenne",
                      color: "hsl(var(--chart-1))",
                    },
                    target: {
                      label: "Objectif",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="semester" stroke="rgba(255,255,255,0.7)" />
                      <YAxis domain={[10, 20]} stroke="rgba(255,255,255,0.7)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="average"
                        stroke="var(--color-average)"
                        strokeWidth={3}
                        dot={{ fill: "var(--color-average)", strokeWidth: 2, r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="target"
                        stroke="var(--color-target)"
                        strokeDasharray="5 5"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Comparaison par Semestre</CardTitle>
                <CardDescription className="text-blue-200">Analyse comparative de vos performances</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    average: {
                      label: "Moyenne",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="semester" stroke="rgba(255,255,255,0.7)" />
                      <YAxis domain={[10, 20]} stroke="rgba(255,255,255,0.7)" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="average" fill="var(--color-average)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {semesterData.map((semester) => (
                <Card key={semester.semester} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      {semester.semester}
                      <Badge className="bg-blue-600">{semester.average.toFixed(1)}/20</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {semester.modules.map((module, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getPerformanceIcon(module.grade)}
                            <span className="text-white text-sm">{module.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`font-medium ${getGradeColor(module.grade)}`}>
                              {module.grade.toFixed(1)}
                            </span>
                            <Badge variant="outline" className="border-white/20 text-blue-200 text-xs">
                              Coef {module.coefficient}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Performance par Module</CardTitle>
                <CardDescription className="text-blue-200">
                  Analyse détaillée de vos résultats par matière
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {modulePerformance
                    .reduce((acc, curr) => {
                      const existing = acc.find((item) => item.module === curr.module)
                      if (existing) {
                        existing.grades.push({ grade: curr.grade, semester: curr.semester })
                        existing.average = existing.grades.reduce((sum, g) => sum + g.grade, 0) / existing.grades.length
                      } else {
                        acc.push({
                          module: curr.module,
                          grades: [{ grade: curr.grade, semester: curr.semester }],
                          average: curr.grade,
                          coefficient: curr.coefficient,
                        })
                      }
                      return acc
                    }, [] as { module: string; grades: { grade: number; semester: string }[]; average: number; coefficient: number }[])
                    .sort((a, b) => b.average - a.average)
                    .map((module, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getPerformanceIcon(module.average)}
                            <span className="text-white font-medium">{module.module}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-lg font-bold ${getGradeColor(module.average)}`}>
                              {module.average.toFixed(1)}
                            </span>
                            <Badge variant="outline" className="border-white/20 text-blue-200">
                              Coef {module.coefficient}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {module.grades.map((grade: { grade: number; semester: string }, gradeIndex: number) => (
                            <Badge key={gradeIndex} variant="secondary" className="text-xs">
                              {grade.semester}: {grade.grade}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="radar" className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Analyse des Compétences</CardTitle>
                <CardDescription className="text-blue-200">
                  Évaluation de vos forces et axes d&apos;amélioration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    current: {
                      label: "Performance Actuelle",
                      color: "hsl(var(--chart-1))",
                    },
                    target: {
                      label: "Objectif",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[500px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="rgba(255,255,255,0.2)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 20]}
                        tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 10 }}
                      />
                      <Radar
                        name="Performance Actuelle"
                        dataKey="current"
                        stroke="var(--color-current)"
                        fill="var(--color-current)"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Radar
                        name="Objectif"
                        dataKey="target"
                        stroke="var(--color-target)"
                        fill="var(--color-target)"
                        fillOpacity={0.1}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Distribution des Notes</CardTitle>
                  <CardDescription className="text-blue-200">Répartition de vos notes par tranche</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      count: {
                        label: "Nombre de notes",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={gradeDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="count"
                          label={({ range, count }) => `${range}: ${count}`}
                        >
                          {gradeDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Statistiques Détaillées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <p className="text-2xl font-bold text-green-400">
                        {modulePerformance.reduce((max, curr) => Math.max(max, curr.grade), 0).toFixed(1)}
                      </p>
                      <p className="text-blue-200 text-sm">Note Max</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <p className="text-2xl font-bold text-red-400">
                        {modulePerformance.reduce((min, curr) => Math.min(min, curr.grade), 20).toFixed(1)}
                      </p>
                      <p className="text-blue-200 text-sm">Note Min</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <p className="text-2xl font-bold text-blue-400">
                        {(
                          modulePerformance.reduce((sum, curr) => sum + curr.grade, 0) / modulePerformance.length
                        ).toFixed(1)}
                      </p>
                      <p className="text-blue-200 text-sm">Médiane</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <p className="text-2xl font-bold text-purple-400">
                        {Math.sqrt(
                          modulePerformance.reduce((sum, curr) => {
                            const avg = modulePerformance.reduce((s, c) => s + c.grade, 0) / modulePerformance.length
                            return sum + Math.pow(curr.grade - avg, 2)
                          }, 0) / modulePerformance.length,
                        ).toFixed(1)}
                      </p>
                      <p className="text-blue-200 text-sm">Écart-type</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Prédictions</h4>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-200">Moyenne S6 (prédite)</span>
                        <span className="text-green-400 font-medium">17.2</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-200">Rang final estimé</span>
                        <span className="text-blue-400 font-medium">8/120</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-200">Mention probable</span>
                        <span className="text-yellow-400 font-medium">Bien</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
