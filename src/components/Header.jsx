import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-bg-surface/95 backdrop-blur-xl border-b border-brand-border shadow-sm'
          : 'bg-brand-bg-light/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Nome */}
          <button
            onClick={scrollToTop}
            className="flex items-center group cursor-pointer"
          >
            <h1 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-brand-text-primary group-hover:text-brand-olive transition-colors">
              O MESTRE MARCENEIRO
            </h1>
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="font-sans text-sm text-brand-text-secondary hover:text-brand-olive transition-colors uppercase tracking-wider"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              className="font-sans text-sm text-brand-text-secondary hover:text-brand-olive transition-colors uppercase tracking-wider"
            >
              Galeria
            </a>
            <a
              href="#beneficios"
              className="font-sans text-sm text-brand-text-secondary hover:text-brand-olive transition-colors uppercase tracking-wider"
            >
              Excelência
            </a>
            <a
              href="#contato"
              className="font-sans text-sm text-brand-text-secondary hover:text-brand-olive transition-colors uppercase tracking-wider"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

