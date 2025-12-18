import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config/whatsapp'
import HeroBackground from './HeroBackground'

const Hero = () => {
  const whatsappUrl = getWhatsAppUrl('hero')

  const handleCTAClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Carrossel de imagens de fundo */}
      <HeroBackground />

      {/* Overlay de textura sutil (sobre o carrossel) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] z-[1]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-32 text-center">
        {/* Badge minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-8 px-4 py-2 border border-brand-olive/30 bg-brand-bg-surface backdrop-blur-sm"
        >
          <span className="font-sans text-xs md:text-sm text-brand-text-secondary tracking-widest uppercase">
            Ateliê • Herança • Bespoke
          </span>
        </motion.div>

        {/* Headline principal - Serifado com glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="inline-block px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-8 mb-6 md:mb-8 rounded-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.75)', // Mais opacidade para contraste
            backdropFilter: 'blur(12px)', // Mais blur para suavidade
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.6)', // Borda mais definida
            boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)', // Sombra mais profunda
          }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-text-primary leading-tight tracking-tight">
            Traduzimos a sua{' '}
            <span className="text-brand-olive">identidade</span>
            <br />
            em móveis sob medida
          </h1>
        </motion.div>

        {/* Subheadline com glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="inline-block px-5 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 mb-10 md:mb-14 rounded-lg max-w-3xl mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.75)', // Opacidade aumentada para consistência
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
        >
          <p className="font-sans text-lg md:text-xl lg:text-2xl text-brand-text-secondary leading-relaxed">
            Exclusividade em cada detalhe, com solidez e durabilidade
          </p>
        </motion.div>

        {/* CTA Principal - Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 border border-brand-olive bg-brand-olive text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 overflow-hidden"
          >


            <span className="relative z-10 font-sans text-sm md:text-base font-medium transition-colors duration-300">
              Consultar Agenda
            </span>
            <div className="relative z-10 w-0.5 h-4 bg-white/30 transition-colors duration-300"></div>
            <motion.svg
              className="relative z-10 w-4 h-4 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>

          <motion.a
            href="#projetos"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 font-sans text-sm md:text-base text-brand-text-secondary hover:text-brand-olive transition-all duration-300 px-5 md:px-6 py-3 md:py-4 rounded-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.5)', // Aumentado de 0.3 para 0.5
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
            }}
          >
            Explorar Galeria
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
