import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Environment utilities
export const env = {
  NODE_ENV: process.env.NODE_ENV as 'development' | 'production' | 'test',
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'ESIHUB',
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_ERROR_REPORTING: process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === 'true',
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidStudentId(studentId: string): boolean {
  // ESI student ID format: YEAR + FILIERE + NUMBER (e.g., 2021IIR001)
  const studentIdRegex = /^\d{4}[A-Z]{2,4}\d{3}$/
  return studentIdRegex.test(studentId)
}

// Format utilities
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateTime(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Grade calculation utilities
export function calculateAverage(grades: { score: number; maxScore: number; coefficient: number }[]): number {
  if (grades.length === 0) return 0
  
  const totalWeightedScore = grades.reduce((sum, grade) => 
    sum + (grade.score / grade.maxScore) * 20 * grade.coefficient, 0
  )
  const totalCoefficient = grades.reduce((sum, grade) => sum + grade.coefficient, 0)
  
  return totalCoefficient > 0 ? totalWeightedScore / totalCoefficient : 0
}

// API utilities
export function handleApiError(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return 'Une erreur inconnue s\'est produite'
}

// URL utilities
export function createAbsoluteUrl(path: string): string {
  return `${env.APP_URL}${path.startsWith('/') ? path : `/${path}`}`
}

// Debounce utility
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): T {
  let timeout: NodeJS.Timeout | null = null
  
  return ((...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}

// Local storage utilities with error handling
export const storage = {
  get: (key: string): string | null => {
    if (typeof window === 'undefined') return null
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set: (key: string, value: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, value)
    } catch {
      // Silently fail
    }
  },
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(key)
    } catch {
      // Silently fail
    }
  },
}
