import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, GraduationCap, Users, Calendar, Bell, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const announcements = [
    {
      id: 1,
      title: "Nouvelle date d'examen annoncée",
      content: "Les examens du semestre S5 sont reportés au 15 février 2025",
      date: "2025-01-28",
      urgent: true,
    },
    {
      id: 2,
      title: "Inscription aux stages d'été",
      content: "Les inscriptions pour les stages d'été sont maintenant ouvertes",
      date: "2025-01-27",
      urgent: false,
    },
    {
      id: 3,
      title: "Nouvelle bibliothèque numérique",
      content: "Accès gratuit à plus de 10,000 livres techniques",
      date: "2025-01-26",
      urgent: false,
    },
  ]

  const services = [
    {
      name: "DOCESI",
      description: "Accédez à tous vos cours, examens et ressources pédagogiques organisés par filière et semestre",
      icon: BookOpen,
      color: "bg-blue-500",
      href: "/courses",
      stats: "2,500+ documents",
    },
    {
      name: "NOTESI",
      description: "Consultez vos notes en temps réel avec calcul automatique des moyennes et statistiques",
      icon: GraduationCap,
      color: "bg-orange-500",
      href: "/grades",
      stats: "Temps réel",
    },
    {
      name: "REPORTESI",
      description: "Collection de rapports de stage et PFE des lauréats pour vous inspirer",
      icon: FileText,
      color: "bg-purple-500",
      href: "/reports",
      stats: "500+ rapports",
    },
    {
      name: "LOGOESI",
      description: "Générateur de logo ESI haute qualité avec dimensions personnalisables",
      icon: Star,
      color: "bg-gray-500",
      href: "/logo-generator",
      stats: "HD Quality",
    },
  ]

  const newFeatures = [
    {
      name: "Suivi des Absences",
      description: "Monitoring automatique avec alertes",
      icon: Calendar,
      color: "bg-red-500",
    },
    {
      name: "Demandes Administratives",
      description: "Attestations et documents en ligne",
      icon: FileText,
      color: "bg-green-500",
    },
    {
      name: "Notifications Push",
      description: "Alertes importantes en temps réel",
      icon: Bell,
      color: "bg-yellow-500",
    },
    {
      name: "Communauté Étudiante",
      description: "Forum et groupes d'étude",
      icon: Users,
      color: "bg-indigo-500",
    },
  ]

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
                <h1 className="text-2xl font-bold text-white">ESIHUB</h1>
                <p className="text-sm text-blue-200">Everything in one place</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Se connecter
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-blue-600 hover:bg-blue-700">S'inscrire</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6">
              La plateforme étudiante de l'
              <span className="text-blue-400">ESI</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accédez à tous vos cours, notes, absences et services administratifs en un seul endroit. Une expérience
              moderne et intuitive pour votre réussite académique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Commencer maintenant
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
                >
                  Découvrir les services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Actualités</h3>
            <p className="text-blue-200">Restez informé des dernières nouvelles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{announcement.title}</CardTitle>
                    {announcement.urgent && (
                      <Badge variant="destructive" className="bg-red-500">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-blue-200">
                    {new Date(announcement.date).toLocaleDateString("fr-FR")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100">{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Nos Services</h3>
            <p className="text-xl text-blue-200">Tout ce dont vous avez besoin pour réussir</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link key={service.name} href={service.href}>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {service.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Nouvelles Fonctionnalités</h3>
            <p className="text-xl text-blue-200">Des outils modernes pour une meilleure expérience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newFeatures.map((feature) => (
              <Card key={feature.name} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2,500+</div>
              <div className="text-blue-200">Documents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
              <div className="text-blue-200">Étudiants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <div className="text-blue-200">Filières</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-blue-200">Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Prêt à commencer ?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui utilisent déjà ESIHUB pour optimiser leur parcours académique
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Se connecter avec Microsoft
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">ESIHUB</span>
              </div>
              <p className="text-blue-200">
                La plateforme étudiante officielle de l'École des Sciences de l'Information
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/courses" className="hover:text-white">
                    DOCESI
                  </Link>
                </li>
                <li>
                  <Link href="/grades" className="hover:text-white">
                    NOTESI
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="hover:text-white">
                    REPORTESI
                  </Link>
                </li>
                <li>
                  <Link href="/logo-generator" className="hover:text-white">
                    LOGOESI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Centre d'aide
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">École</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="https://esi.ac.ma" className="hover:text-white">
                    Site officiel
                  </a>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    À propos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-blue-200">
            <p>
              Made with ❤️ by{" "}
              <a href="https://www.linkedin.com/in/Khalid9ASSI" className="text-blue-400 hover:text-white">
                Khalid KASSI
              </a>
            </p>
            <p className="mt-2">
              Maintained by{" "}
              <a href="mailto:achraf.sani@esi.ac.ma" className="text-blue-400 hover:text-white">
                Achraf SANI
              </a>{" "}
              &{" "}
              <a href="https://www.linkedin.com/in/hamza-bouali/" className="text-blue-400 hover:text-white">
                HAMZA BOUALI
              </a>
            </p>
            <p className="mt-2">© 2025 ESIHUB - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
