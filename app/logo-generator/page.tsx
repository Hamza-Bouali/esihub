"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Download, Palette, Settings, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function LogoGeneratorPage() {
  const [width, setWidth] = useState([400])
  const [height, setHeight] = useState([200])
  const [format, setFormat] = useState("png")
  const [quality, setQuality] = useState([90])
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [logoColor, setLogoColor] = useState("#0673A8")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateLogo = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width[0]
    canvas.height = height[0]

    // Clear canvas with background color
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw ESI logo (simplified version)
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const logoWidth = Math.min(canvas.width * 0.8, 300)
    const logoHeight = logoWidth * 0.35

    // Draw main rectangle
    ctx.fillStyle = logoColor
    ctx.fillRect(centerX - logoWidth / 2, centerY - logoHeight / 2, logoWidth * 0.35, logoHeight)

    // Draw ESI text (simplified)
    ctx.fillStyle = "#FFFFFF"
    ctx.font = `bold ${logoHeight * 0.3}px Arial`
    ctx.textAlign = "center"
    ctx.fillText("ESI", centerX - logoWidth / 2 + logoWidth * 0.175, centerY + logoHeight * 0.1)

    // Draw additional text
    ctx.fillStyle = logoColor
    ctx.font = `${logoHeight * 0.15}px Arial`
    ctx.fillText("ÉCOLE DES SCIENCES", centerX + logoWidth * 0.1, centerY - logoHeight * 0.1)
    ctx.fillText("DE L'INFORMATION", centerX + logoWidth * 0.1, centerY + logoHeight * 0.1)
  }

  const downloadLogo = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = `esi-logo-${width[0]}x${height[0]}.${format}`

    if (format === "png") {
      link.href = canvas.toDataURL("image/png")
    } else if (format === "jpg") {
      link.href = canvas.toDataURL("image/jpeg", quality[0] / 100)
    }

    link.click()
  }

  // Generate logo when parameters change
  useState(() => {
    const timer = setTimeout(generateLogo, 100)
    return () => clearTimeout(timer)
  })

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
                <h1 className="text-2xl font-bold text-white">LOGOESI</h1>
                <p className="text-sm text-blue-200">Générateur de logo ESI haute qualité</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Dimensions */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Largeur: {width[0]}px</Label>
                  <Slider value={width} onValueChange={setWidth} max={1200} min={200} step={10} className="mt-2" />
                </div>
                <div>
                  <Label className="text-white">Hauteur: {height[0]}px</Label>
                  <Slider value={height} onValueChange={setHeight} max={800} min={100} step={10} className="mt-2" />
                </div>
              </CardContent>
            </Card>

            {/* Colors */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Couleurs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Couleur du logo</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Input
                      type="color"
                      value={logoColor}
                      onChange={(e) => setLogoColor(e.target.value)}
                      className="w-12 h-10 p-1 bg-white/10 border-white/20"
                    />
                    <Input
                      value={logoColor}
                      onChange={(e) => setLogoColor(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-white">Couleur de fond</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-10 p-1 bg-white/10 border-white/20"
                    />
                    <Input
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Export Settings */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Format</Label>
                  <Select value={format} onValueChange={setFormat}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png">PNG (Transparent)</SelectItem>
                      <SelectItem value="jpg">JPG (Compressé)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {format === "jpg" && (
                  <div>
                    <Label className="text-white">Qualité: {quality[0]}%</Label>
                    <Slider value={quality} onValueChange={setQuality} max={100} min={10} step={5} className="mt-2" />
                  </div>
                )}
                <Button onClick={downloadLogo} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le logo
                </Button>
              </CardContent>
            </Card>

            {/* Presets */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Formats prédéfinis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => {
                    setWidth([400])
                    setHeight([200])
                  }}
                >
                  Web (400x200)
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => {
                    setWidth([800])
                    setHeight([400])
                  }}
                >
                  HD (800x400)
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => {
                    setWidth([1200])
                    setHeight([600])
                  }}
                >
                  Print (1200x600)
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  onClick={() => {
                    setWidth([500])
                    setHeight([500])
                  }}
                >
                  Carré (500x500)
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Aperçu</CardTitle>
                <CardDescription className="text-blue-200">
                  {width[0]} x {height[0]} pixels • {format.toUpperCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-8 bg-gray-100 rounded-lg">
                  <canvas
                    ref={canvasRef}
                    className="border border-gray-300 shadow-lg max-w-full h-auto"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      imageRendering: "pixelated",
                    }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-blue-200 text-sm">
                    Le logo sera généré sans pixellisation à la résolution demandée
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white">Instructions</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-200 space-y-2">
                <p>• Ajustez les dimensions selon vos besoins</p>
                <p>• Choisissez les couleurs appropriées pour votre usage</p>
                <p>• Utilisez PNG pour la transparence, JPG pour une taille réduite</p>
                <p>• Les formats prédéfinis couvrent la plupart des cas d'usage</p>
                <p>• Le logo généré conserve sa qualité à toutes les résolutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
