// Global type definitions for ESIHUB

export interface User {
  id: string;
  email: string;
  name: string;
  studentId?: string;
  filiere?: string;
  semester?: string;
  role: 'student' | 'admin' | 'teacher';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  description?: string;
  filiere: string;
  semester: string;
  credits: number;
  professor?: string;
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  title: string;
  description?: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  fileType: string;
  courseId: string;
  uploadedBy: string;
  downloads: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface InternshipReport {
  id: string;
  title: string;
  description: string;
  studentName: string;
  studentId: string;
  filiere: string;
  year: number;
  company: string;
  companyLocation: string;
  supervisor: string;
  duration: string; // e.g., "2 mois", "3 mois"
  internshipType: 'stage-technique' | 'stage-ouvrier' | 'pfe' | 'stage-initiation';
  reportFile?: {
    fileName: string;
    fileUrl: string;
    fileSize: number;
    fileType: string;
  };
  presentationFile?: {
    fileName: string;
    fileUrl: string;
    fileSize: number;
    fileType: string;
  };
  tags: string[];
  likes: number;
  downloads: number;
  views: number;
  isPublic: boolean;
  submittedAt: Date;
  approvedAt?: Date;
  approvedBy?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface Grade {
  id: string;
  studentId: string;
  courseId: string;
  type: 'exam' | 'tp' | 'td' | 'project' | 'quiz';
  score: number;
  maxScore: number;
  coefficient: number;
  date: Date;
  semester: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  urgent: boolean;
  targetAudience: 'all' | 'students' | 'teachers' | string[]; // specific filieres
  publishedAt: Date;
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Environment variables
export interface AppConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_APP_URL: string;
  NEXT_PUBLIC_APP_NAME: string;
  NEXT_PUBLIC_APP_VERSION: string;
  NEXT_PUBLIC_ENABLE_ANALYTICS: boolean;
  NEXT_PUBLIC_ENABLE_ERROR_REPORTING: boolean;
}
