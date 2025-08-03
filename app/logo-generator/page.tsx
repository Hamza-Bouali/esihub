'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Download, RotateCcw, Info } from 'lucide-react'
import ESILogo from '@/components/ui/esi-logo'

export default function LogoResizerPage() {
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(106)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Update SVG content when dimensions change
  useEffect(() => {
    // This effect could be used later for additional functionality
  }, [width, height])

  const renderESILogoSVG = (logoWidth: number, logoHeight: number) => {
    return `<svg version="1.1" id="esi-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1305.16 458.4" xml:space="preserve" width="${logoWidth}" height="${logoHeight}">
      <style type="text/css">
        .st0{fill:#0673A8;}
        .st1{fill:#FFFFFF;}
        .st2{fill:#7FCEF3;}
      </style>
      <g>
        <g>
          <rect class="st0" width="448.04" height="458.4"/>
          <path class="st1" d="M308.38,321.11c-29.69,33.22-72.8,54.07-120.87,54.07c-43.19,0-82.41-16.89-111.53-44.39
            c-1.7-1.63-3.32-3.25-5.02-4.95l-4.81,4.17c1.63,1.7,3.25,3.39,5.02,4.95c30.18,28.91,71.25,46.65,116.34,46.65
            c52.02,0,98.46-23.54,129.42-60.5L308.38,321.11z"/>
          <path class="st1" d="M24.6,214.25c0,42.2,15.97,82.13,44.95,112.74l-2.12,1.91c-29.47-31.03-45.66-71.6-45.66-114.64
            c0-44.25,17.1-85.88,48.13-117.33h4.1C42.55,127.67,24.6,170.22,24.6,214.25z"/>
          <path class="st1" d="M170.14,241.45h-57.93v53.73h64.56v16.14H92.98V162.3h80.48v16.14h-61.24v47.1h57.93V241.45z"/>
          <path class="st1" d="M192.01,285.68c8.62,5.3,21.23,9.73,34.49,9.73c19.68,0,31.18-10.39,31.18-25.43
            c0-13.92-7.96-21.89-28.08-29.62c-24.32-8.62-39.35-21.23-39.35-42.23c0-23.22,19.23-40.46,48.2-40.46
            c15.26,0,26.31,3.54,32.94,7.3l-5.3,15.7c-4.86-2.65-14.81-7.08-28.3-7.08c-20.34,0-28.08,12.16-28.08,22.33
            c0,13.93,9.07,20.78,29.63,28.74c25.2,9.73,38.03,21.89,38.03,43.78c0,22.99-17.02,42.89-52.18,42.89
            c-14.37,0-30.07-4.2-38.03-9.5L192.01,285.68z"/>
          <path class="st1" d="M316.93,162.3v149.02h-19.23V162.3H316.93z"/>
          <polygon class="st2" points="357.74,109.24 357.74,239.25 422.74,174.25"/>
          <polygon class="st2" points="447.4,174.25 394.39,227.26 394.39,209.23 429.37,174.25 394.39,139.26 394.39,121.24"/>
          <polygon class="st2" points="465.01,174.25 426.07,213.19 426.07,202.56 454.38,174.25 426.07,145.01 426.07,135.3"/>
          <path class="st1" d="M324.31,123.47c-1.19-2.02-8.81-2.5-17.72-1.01c-8.81,1.46-15.81,4.3-16.4,6.6c-0.03-0.25-0.04-0.5-0.03-0.76
            c0-1.35,0.16-2.69,0.47-4c0.02-0.05,0.03-0.11,0.05-0.16c2.28-9.34,11.7-15.06,21.04-12.78c3.39,0.83,6.46,2.66,8.79,5.25
            c0.65,0.71,1.24,1.48,1.75,2.29C323.16,120.32,323.85,121.86,324.31,123.47z"/>
          <path class="st1" d="M325,128.3c0,0.21,0,0.4-0.02,0.61v0.24c-0.04,0.8-0.13,1.59-0.29,2.38c-1.51,8.07-8.6,14.19-17.11,14.19
            c-5.44,0.01-10.57-2.54-13.85-6.87c-1.03-1.32-1.85-2.8-2.44-4.37c-0.14-0.39-0.29-0.77-0.4-1.17c-0.34-1.13-0.56-2.29-0.66-3.47
            v-0.03c-0.03-0.25-0.05-0.5-0.05-0.75c0.59-2.3,7.59-5.14,16.4-6.6c8.91-1.49,16.53-1.01,17.72,1.01
            c0.06,0.21,0.13,0.42,0.18,0.63c0.3,1.18,0.46,2.38,0.5,3.6C325,127.9,325,128.09,325,128.3z"/>
          <path class="st2" d="M322.25,118.91c-4.54-0.11-10.09,0.3-16.03,1.3c-5.92,0.98-11.32,2.38-15.55,3.93
            c-6.13,2.23-9.89,4.8-9.53,6.92c0.34,2.01,4.27,3.18,10.16,3.42c-0.14-0.39-0.29-0.77-0.4-1.17c-0.34-1.13-0.56-2.29-0.66-3.47
            v-0.03c-0.04-0.07-0.07-0.16-0.08-0.24c-0.03-0.17-0.02-0.35,0.03-0.51c0.59-2.3,7.59-5.14,16.4-6.6
            c8.91-1.49,16.53-1.01,17.72,1.01c0.08,0.12,0.13,0.26,0.16,0.4c0.01,0.07,0.02,0.15,0.02,0.22c0.3,1.18,0.46,2.38,0.5,3.6
            c0.02,0.21,0.02,0.4,0.02,0.61s0,0.4-0.02,0.61c5.52-2.15,8.84-4.53,8.51-6.53C333.13,120.26,328.74,119.06,322.25,118.91z"/>
        </g>
        <g>
          <path class="st1" d="M521.13,318.6H489.1v-61.69h32.03v8.22h-23.09v18.43h23.09v8.05h-23.09v18.47h23.09V318.6z"/>
          <path class="st1" d="M588.2,303.13c-2.68,5.39-6.39,9.53-11.12,12.39c-4.73,2.87-10.22,4.3-16.46,4.3c-4.63,0-8.9-0.89-12.82-2.67
            c-3.91-1.78-7.42-4.42-10.53-7.92c-2.63-2.91-4.62-6.22-5.97-9.94c-1.36-3.71-2.03-7.69-2.03-11.93c0-4.29,0.82-8.37,2.46-12.22
            c1.64-3.86,4.04-7.36,7.2-10.53c2.99-2.94,6.32-5.16,9.98-6.67c3.66-1.51,7.59-2.27,11.8-2.27c6.33,0,11.88,1.5,16.67,4.49
            c4.79,2.99,8.4,7.23,10.83,12.71h-10.51c-1.98-2.74-4.41-4.8-7.29-6.19c-2.88-1.38-6.14-2.08-9.79-2.08
            c-2.91,0-5.68,0.55-8.3,1.65c-2.63,1.1-4.96,2.7-6.99,4.79c-2.12,2.18-3.77,4.7-4.96,7.58c-1.19,2.88-1.78,5.82-1.78,8.81
            c0,3.22,0.54,6.26,1.61,9.13c1.07,2.87,2.61,5.35,4.62,7.44c2.12,2.2,4.56,3.91,7.33,5.13c2.77,1.21,5.59,1.82,8.47,1.82
            c3.53,0,6.72-0.67,9.55-2.01c2.84-1.34,5.17-3.28,7.01-5.83H588.2z"/>
          <path class="st1" d="M594.51,287.37c0-4.32,0.82-8.42,2.46-12.29s4.04-7.36,7.2-10.47c2.99-2.94,6.32-5.16,9.98-6.67
            c3.66-1.51,7.59-2.27,11.8-2.27c4.32,0,8.33,0.76,12.01,2.27c3.69,1.51,7.05,3.76,10.1,6.76c3.14,3.08,5.49,6.52,7.08,10.34
            c1.58,3.81,2.37,7.92,2.37,12.33c0,4.38-0.68,8.41-2.03,12.1c-1.36,3.69-3.39,7-6.1,9.94c-3.19,3.45-6.76,6.04-10.7,7.8
            c-3.94,1.75-8.21,2.63-12.82,2.63c-4.63,0-8.9-0.89-12.82-2.67c-3.91-1.78-7.42-4.42-10.53-7.92c-2.63-2.91-4.62-6.22-5.97-9.94
            C595.19,295.58,594.51,291.61,594.51,287.37z M603.83,287.45c0,3.22,0.54,6.26,1.61,9.13c1.07,2.87,2.61,5.35,4.62,7.44
            c2.12,2.2,4.56,3.91,7.33,5.13c2.77,1.21,5.59,1.82,8.47,1.82c6.38,0,11.72-2.27,16.01-6.8c4.29-4.53,6.44-10.16,6.44-16.88
            c0-2.85-0.52-5.57-1.55-8.16c-1.03-2.58-2.54-4.96-4.51-7.14c-2.34-2.51-4.85-4.37-7.52-5.57c-2.67-1.2-5.63-1.8-8.88-1.8
            c-2.91,0-5.68,0.55-8.3,1.65c-2.63,1.1-4.96,2.7-6.99,4.79c-2.12,2.18-3.77,4.7-4.96,7.58
            C604.42,281.52,603.83,284.46,603.83,287.45z"/>
          <path class="st1" d="M694.75,318.6H665.6v-61.69h8.94v53.17h20.21V318.6z"/>
          <path class="st1" d="M733.98,318.6h-32.03v-61.69h32.03v8.22h-23.09v18.43h23.09v8.05h-23.09v18.47h23.09V318.6z"/>
        </g>
      </g>
    </svg>`
  }

  const downloadSVG = () => {
    const svgData = renderESILogoSVG(width, height)
    const blob = new Blob([svgData], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `esi-logo-${width}x${height}.svg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const downloadPNG = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = width
    canvas.height = height

    // Create an image from SVG
    const svgData = renderESILogoSVG(width, height)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)
    
    const img = new Image()
    img.onload = () => {
      // Clear canvas with white background
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, width, height)
      
      // Draw the SVG image
      ctx.drawImage(img, 0, 0, width, height)
      
      // Download as PNG
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `esi-logo-${width}x${height}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
        }
      }, 'image/png')
      
      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  const resetToDefault = () => {
    setWidth(300)
    setHeight(106)
  }

  const presetSizes = [
    { name: 'Small', width: 150, height: 53 },
    { name: 'Medium', width: 300, height: 106 },
    { name: 'Large', width: 600, height: 211 },
    { name: 'Banner', width: 800, height: 282 },
    { name: 'Original', width: 1305, height: 458 }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">ESI Logo Resizer</h1>
          <p className="text-muted-foreground text-lg">
            Resize the official ESI logo and download it in SVG or PNG format
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Logo Preview
              </CardTitle>
              <CardDescription>
                Current size: {width} × {height} pixels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center items-center min-h-[200px] bg-gray-900 rounded-lg p-4">
                <ESILogo width={width} height={height} className="max-w-full max-h-full" />
              </div>
              
              <div className="flex gap-2 justify-center flex-wrap">
                <Button onClick={downloadSVG} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download SVG
                </Button>
                <Button onClick={downloadPNG} variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PNG
                </Button>
                <Button onClick={resetToDefault} variant="outline" className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="space-y-6">
            {/* Preset Sizes */}
            <Card>
              <CardHeader>
                <CardTitle>Preset Sizes</CardTitle>
                <CardDescription>Common logo sizes for different uses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {presetSizes.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      onClick={() => {
                        setWidth(preset.width)
                        setHeight(preset.height)
                      }}
                      className="flex justify-between items-center p-4 h-auto"
                    >
                      <div className="text-left">
                        <div className="font-medium">{preset.name}</div>
                      </div>
                      <div className="text-sm font-mono">
                        {preset.width} × {preset.height}
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Custom Dimensions */}
            <Card>
              <CardHeader>
                <CardTitle>Custom Dimensions</CardTitle>
                <CardDescription>Set exact width and height in pixels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="width">Width (px)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      max="2000"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (px)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      max="2000"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Aspect ratio: {(width / height).toFixed(2)}:1
                </div>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Download Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div><strong>SVG:</strong> Vector format, scalable without quality loss</div>
                <div><strong>PNG:</strong> Raster format with transparent background</div>
                <div><strong>Original dimensions:</strong> 1305 × 458 pixels</div>
                <div><strong>Aspect ratio:</strong> 2.85:1</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hidden canvas for PNG conversion */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  )
}
