import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const scrollContainerRef = useRef(null)
  const buttonRefs = useRef({})
  const isInitialMount = useRef(true)

  // Scroll para o início no mobile quando o componente montar
  useEffect(() => {
    if (scrollContainerRef.current && isInitialMount.current) {
      // Usar setTimeout para garantir que o DOM está totalmente renderizado
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = 0
          isInitialMount.current = false
        }
      }, 0)
    }
  }, [])

  // Scroll para a categoria ativa quando ela mudar (apenas após o mount inicial)
  useEffect(() => {
    // Ignorar no mount inicial
    if (isInitialMount.current) return
    
    // Pequeno delay para garantir que os refs estão prontos
    setTimeout(() => {
      const activeButton = buttonRefs.current[activeCategory]
      if (activeButton && scrollContainerRef.current) {
        const container = scrollContainerRef.current
        
        // Calcular posição para centralizar o botão ativo
        const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2)
        
        container.scrollTo({
          left: Math.max(0, scrollLeft), // Garantir que não seja negativo
          behavior: 'smooth'
        })
      }
    }, 50)
  }, [activeCategory])

  return (
    <div 
      ref={scrollContainerRef}
      className="flex items-center justify-start md:justify-center gap-8 md:gap-12 mb-12 md:mb-16 overflow-x-auto pb-2 scrollbar-hide"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id
        
        return (
          <button
            key={category.id}
            ref={(el) => (buttonRefs.current[category.id] = el)}
            onClick={() => onCategoryChange(category.id)}
            className="relative px-4 py-2 text-sm md:text-base font-medium transition-colors duration-300 whitespace-nowrap group"
          >
            {/* Texto da categoria */}
            <span
              className={`relative z-10 transition-colors duration-300 ${
                isActive
                  ? 'text-brand-olive'
                  : 'text-brand-text-secondary hover:text-brand-olive'
              }`}
            >
              {category.nome}
            </span>

            {/* Linha dourada indicadora (apenas na categoria ativa) */}
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-olive"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter

