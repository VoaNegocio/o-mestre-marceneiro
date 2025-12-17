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
          {/* Overlay sutil reduzido para melhor visualização das imagens */}
          <div className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-gradient-to-b from-white/30 via-white/20 to-white/30"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default HeroBackground

