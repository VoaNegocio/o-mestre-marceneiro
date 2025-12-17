import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CategoryFilter from './CategoryFilter'
import ProjectCard from './ProjectCard'
import GalleryModal from './GalleryModal'
import { projects, categories } from '../data/projects'

const ProjectGallery = () => {
  // Estado simplificado: apenas categoria ativa e índice do projeto
  const [activeCategory, setActiveCategory] = useState('cozinha')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Obter projetos da categoria ativa (filtrar projetos sem imagem)
  const activeProjects = (projects[activeCategory] || []).filter(p => p.src)

  // Projeto atual
  const currentProject = activeProjects[currentIndex]

  // Navegação entre projetos
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % activeProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + activeProjects.length) % activeProjects.length)
  }

  // Trocar categoria
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    setCurrentIndex(0) // Reset para o primeiro projeto da categoria
  }

  // Handler para o CTA
  const handleWantProject = () => {
    // Aqui pode adicionar tracking se necessário
    console.log('Cliente interessado em:', currentProject?.nome)
  }

  // Handler para abrir modal ao clicar na imagem
  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  // Fechar modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  // Navegação no modal
  const handleModalNext = () => {
    nextProject()
  }

  const handleModalPrev = () => {
    prevProject()
  }

  const handleModalSelectImage = (index) => {
    setCurrentIndex(index)
  }

  // Preparar imagens para o modal
  const modalImages = activeProjects.map(project => ({
    src: project.src,
    alt: project.descricao,
    nome: project.nome,
    descricao: project.descricao,
  }))

  return (
    <div className="w-full">
      {/* Filtro de Categorias - Minimalista */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Aviso de deslizar - Mobile apenas */}
      {activeProjects.length > 1 && (
        <motion.div 
          className="text-center mb-6 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-bg-surface/60 backdrop-blur-sm border border-brand-border rounded-sm">
            <motion.svg 
              className="w-3.5 h-3.5 text-brand-text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [-2, 0, -2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M15 19l-7-7 7-7" 
              />
            </motion.svg>
            <span className="font-sans text-xs font-medium text-brand-text-secondary tracking-wide uppercase">
              deslizar
            </span>
            <motion.svg 
              className="w-3.5 h-3.5 text-brand-text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [2, 0, 2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M9 5l7 7-7 7" 
              />
            </motion.svg>
          </div>
        </motion.div>
      )}

      {/* Display do Projeto - Com transição suave */}
      <div className="relative min-h-[600px] md:min-h-[700px]">
        <AnimatePresence mode="wait">
          {currentProject && (
            <motion.div
              key={`${activeCategory}-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x
                if (swipe < -10000) {
                  nextProject()
                } else if (swipe > 10000) {
                  prevProject()
                }
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <ProjectCard
                project={currentProject}
                onWantProject={handleWantProject}
                onImageClick={handleImageClick}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Setas de navegação - Desktop apenas */}
        {activeProjects.length > 1 && (
          <>
            <button
              onClick={prevProject}
              className="hidden lg:flex absolute -left-16 xl:-left-20 2xl:-left-24 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm border border-brand-border hover:border-brand-olive text-brand-text-secondary hover:text-brand-olive transition-all duration-300 shadow-lg rounded-sm hover:scale-110"
              aria-label="Projeto anterior"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="hidden lg:flex absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm border border-brand-border hover:border-brand-olive text-brand-text-secondary hover:text-brand-olive transition-all duration-300 shadow-lg rounded-sm hover:scale-110"
              aria-label="Próximo projeto"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Indicadores de slide */}
        {activeProjects.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {activeProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 bg-brand-olive'
                    : 'w-1.5 bg-brand-border hover:bg-brand-olive/50'
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal de visualização ampliada */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={modalImages}
        currentIndex={currentIndex}
        onNext={handleModalNext}
        onPrev={handleModalPrev}
        onSelectImage={handleModalSelectImage}
      />
    </div>
  )
}

export default ProjectGallery
