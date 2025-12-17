import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config/whatsapp'

const ProjectCard = ({ project, onWantProject, onImageClick }) => {
  if (!project || !project.src) {
    return null
  }

  const whatsappUrl = getWhatsAppUrl('projetos')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Imagem Grande - Layout Editorial */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative group"
      >
        <div 
          className="relative aspect-[4/3] overflow-hidden bg-brand-bg-surface rounded-sm cursor-pointer"
          onClick={onImageClick}
        >
          <img
            src={project.src}
            alt={project.nome}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Overlay sutil de cinema */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-white font-sans text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Clique para ampliar
            </span>
          </div>
        </div>
      </motion.div>

      {/* Detalhes Refinados */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="space-y-6"
      >
        {/* Título do projeto - Serifado */}
        <div>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-primary mb-4 tracking-tight">
            {project.nome}
          </h3>
          <div className="w-16 h-0.5 bg-brand-olive"></div>
        </div>

        {/* Descrição - Sans-serif */}
        <p className="font-sans text-brand-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
          {project.descricao}
        </p>

        {/* Tags Técnicas */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs md:text-sm font-sans text-brand-text-secondary border border-brand-border rounded-sm bg-brand-bg-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Contextual - Discreto */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWantProject}
          className="inline-block group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative inline-flex items-center gap-3 px-6 py-3 border border-brand-olive bg-brand-olive text-white transition-all duration-300 overflow-hidden">
            {/* Shimmer effect - contínuo */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            ></motion.div>
            
            <span className="relative z-10 font-sans text-sm md:text-base font-medium transition-colors duration-300">
              Desejo um projeto assim
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
          </div>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default ProjectCard

