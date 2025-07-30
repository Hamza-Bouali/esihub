"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { GraduationCap, Mail, Lock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleMicrosoftLogin = async () => {
    setLoading(true)
    setError("")

    // Simulate Microsoft OAuth flow
    try {
      // In real implementation, this would redirect to Microsoft OAuth
      console.log("Redirecting to Microsoft OAuth...")
      // window.location.href = "/api/auth/microsoft"

      // For demo purposes, simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful login
      window.location.href = "/dashboard"
    } catch (err) {
      setError("Erreur lors de la connexion avec Microsoft")
    } finally {
      setLoading(false)
    }
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Check if email is from ESI domain
    if (!email.endsWith("@esi.ac.ma")) {
      setError("Seuls les emails @esi.ac.ma sont autorisés")
      setLoading(false)
      return
    }

    try {
      // Simulate login process
      await new Promise((resolve) => setTimeout(resolve, 1500))
      window.location.href = "/dashboard"
    } catch (err) {
      setError("Email ou mot de passe incorrect")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Connexion ESIHUB</h1>
          <p className="text-blue-200">Accédez à votre espace étudiant</p>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-center">Se connecter</CardTitle>
            <CardDescription className="text-blue-200 text-center">Utilisez votre compte Microsoft ESI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Microsoft Login */}
            <Button
              onClick={handleMicrosoftLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              size="lg"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Connexion...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Continuer avec Microsoft</span>
                </div>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-2 text-blue-200">Ou</span>
              </div>
            </div>

            {/* Email Login Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email ESI
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.nom@esi.ac.ma"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                    required
                  />
                </div>
              </div>

              {error && (
                <Alert className="bg-red-500/20 border-red-500/50">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <AlertDescription className="text-red-200">{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
                variant="outline"
              >
                {loading ? "Connexion..." : "Se connecter"}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <Link href="/forgot-password" className="text-blue-300 hover:text-white text-sm">
                Mot de passe oublié ?
              </Link>
              <div className="text-blue-200 text-sm">Pas encore de compte ? Contactez l'administration</div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link href="/" className="text-blue-300 hover:text-white">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
