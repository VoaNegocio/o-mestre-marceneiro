import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const HeroBackground = () => {
  const images = [
    '/projetos/imgs-hero-section/hero1.jpg',
    '/projetos/imgs-hero-section/hero2.jpg',
    '/projetos/imgs-hero-section/hero3.jpg',
    '/projetos/imgs-hero-section/hero4.jpg',
    '/projetos/imgs-hero-section/hero5.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 6000) // 6 segundos por imagem

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Hero background ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Vignette cinematográfica: sombra nas bordas para focar no centro */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
          {/* Gradiente inferior suave para garantir leitura do footer/scroll se houver */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroBackground

