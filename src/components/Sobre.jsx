import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

const Sobre = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const features = [
    {
      title: 'Artesanal',
      description: 'Trabalho manual de alta qualidade e atenção aos mínimos detalhes.'
    },
    {
      title: 'Bespoke',
      description: 'Cada projeto é único e feito exclusivamente para você.'
    },
    {
      title: 'Legado',
      description: 'Móveis que atravessam gerações, tornando-se parte da história familiar.'
    }
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollLeft = container.scrollLeft
      const width = container.offsetWidth
      // Ajuste para melhor detecção do card ativo
      const index = Math.round(scrollLeft / (width * 0.7))
      // Clamp index to valid range
      const clampedIndex = Math.min(Math.max(index, 0), features.length - 1)
      setActiveIndex(clampedIndex)
    }
  }

  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      // Assumindo que cada card tem min-w-[280px] e gap-4 (16px)
      // Ajuste grosso, o scroll snap faz o resto
      const cardWidth = 280 + 16
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
      setActiveIndex(index)
    }
  }

  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-olive relative overflow-hidden">
      {/* Pattern de textura sutil */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='lines' x='0' y='0' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cline x1='0' y1='0' x2='100' y2='0' stroke='%23FFFFFF' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23lines)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              A <span className="text-brand-bg-light/90">Herança</span> do Artesanato
            </h2>

            <div className="w-16 h-0.5 bg-white/20 mb-8"></div>

            {/* Imagem Mobile (Aparece abaixo do título apenas no mobile) */}
            <div className="block lg:hidden mb-8 relative">
              <div className="aspect-square bg-brand-bg-surface/10 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-24 h-0.5 bg-white/20 mx-auto mb-6"></div>
                  <p className="font-serif text-2xl text-white mb-4">O Mestre</p>
                  <p className="font-sans text-brand-bg-light/70 text-sm uppercase tracking-widest">Foto do Artesão</p>
                  <div className="w-24 h-0.5 bg-white/20 mx-auto mt-6"></div>
                </div>
              </div>
            </div>

            <p className="font-sans text-lg text-brand-bg-light/90 mb-6 leading-relaxed">
              Com anos de dedicação à excelência, criamos móveis sob medida que unem a tradição artesanal
              com o design atemporal. Cada peça é pensada e executada com a atenção de um mestre.
            </p>
            <p className="font-sans text-lg text-brand-bg-light/90 mb-10 leading-relaxed">
              Nossa missão é transformar seus espaços em ambientes únicos, onde cada móvel conta uma história
              de qualidade, cuidado e paixão pelo ofício.
            </p>

            {/* Características - Horizontal Scroll no Mobile / Vertical no Desktop */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible snap-x md:snap-none gap-4 md:gap-6 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] md:min-w-0 snap-center flex items-start gap-4 p-4 md:p-0 bg-brand-bg-surface/5 md:bg-transparent rounded-lg md:rounded-none border border-white/10 md:border-none"
                  >
                    <div className="w-0.5 h-12 bg-white/30 mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="font-sans text-brand-bg-light/80 text-sm md:text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicadores (Dots) - Mobile Only */}
              <div className="flex justify-center md:hidden gap-2 mt-4">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                        ? 'w-6 bg-white/90'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    aria-label={`Ir para item ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Imagem/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-brand-bg-surface/10 border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-24 h-0.5 bg-white/20 mx-auto mb-6"></div>
                <p className="font-serif text-2xl text-white mb-4">O Mestre</p>
                <p className="font-sans text-brand-bg-light/70 text-sm uppercase tracking-widest">Foto do Artesão</p>
                <div className="w-24 h-0.5 bg-white/20 mx-auto mt-6"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sobre

