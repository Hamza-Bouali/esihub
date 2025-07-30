import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock the icons
jest.mock('lucide-react', () => ({
  BookOpen: () => <div data-testid="book-open-icon" />,
  FileText: () => <div data-testid="file-text-icon" />,
  GraduationCap: () => <div data-testid="graduation-cap-icon" />,
  Users: () => <div data-testid="users-icon" />,
  Calendar: () => <div data-testid="calendar-icon" />,
  Bell: () => <div data-testid="bell-icon" />,
  Star: () => <div data-testid="star-icon" />,
}))

describe('HomePage', () => {
  it('renders the page heading', () => {
    render(<HomePage />)
    
    const heading = screen.getByRole('heading', { 
      name: /la plateforme étudiante de l'esi/i 
    })
    expect(heading).toBeInTheDocument()
  })

  it('displays the ESIHUB brand name', () => {
    render(<HomePage />)
    
    const brandName = screen.getByText('ESIHUB')
    expect(brandName).toBeInTheDocument()
  })

  it('shows all service cards', () => {
    render(<HomePage />)
    
    expect(screen.getByText('DOCESI')).toBeInTheDocument()
    expect(screen.getByText('NOTESI')).toBeInTheDocument()
    expect(screen.getByText('REPORTESI')).toBeInTheDocument()
    expect(screen.getByText('LOGOESI')).toBeInTheDocument()
  })

  it('displays announcements section', () => {
    render(<HomePage />)
    
    const announcementsHeading = screen.getByRole('heading', { 
      name: /actualités/i 
    })
    expect(announcementsHeading).toBeInTheDocument()
  })

  it('shows login and register buttons', () => {
    render(<HomePage />)
    
    const loginButtons = screen.getAllByText(/se connecter/i)
    const registerButton = screen.getByText(/s'inscrire/i)
    
    expect(loginButtons).toHaveLength(2) // One in header, one in CTA
    expect(registerButton).toBeInTheDocument()
  })

  it('displays statistics', () => {
    render(<HomePage />)
    
    expect(screen.getByText('2,500+')).toBeInTheDocument()
    expect(screen.getByText('1,200+')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
  })

  it('has accessible links', () => {
    render(<HomePage />)
    
    const courseLink = screen.getByRole('link', { name: /docesi/i })
    const gradesLink = screen.getByRole('link', { name: /notesi/i })
    
    expect(courseLink).toHaveAttribute('href', '/courses')
    expect(gradesLink).toHaveAttribute('href', '/grades')
  })
})
