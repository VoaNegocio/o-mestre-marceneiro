import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config/whatsapp'

const Beneficios = () => {
  const whatsappUrl = getWhatsAppUrl('beneficios')

  const beneficios = [
    {
      title: 'Bespoke',
      description: 'Cada peça é única, feita exclusivamente sob medida para seu espaço e estilo pessoal.',
    },
    {
      title: 'Qualidade Atemporal',
      description: 'Utilizamos apenas madeiras nobres e materiais de primeira linha que atravessam gerações.',
    },
    {
      title: 'Design Autoral',
      description: 'Criamos móveis que refletem sua personalidade e harmonizam perfeitamente com seu ambiente.',
    },
    {
      title: 'Execução Completa',
      description: 'Oferecemos serviço completo de entrega e montagem profissional, cuidando de cada detalhe.',
    },
  ]

  return (
    <section id="beneficios" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-bg-light relative overflow-hidden">
      {/* Gradiente sutil com verde oliva */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4A5D46]/3 via-transparent to-[#4A5D46]/5"></div>
      
      {/* Padrão de textura em verde oliva */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='lines' x='0' y='0' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cline x1='0' y1='0' x2='100' y2='0' stroke='%234A5D46' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23lines)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-4 tracking-tight">
            A <span className="text-brand-olive">Excelência</span> em Cada Detalhe
          </h2>
          <div className="w-24 h-0.5 bg-brand-olive mx-auto mb-6"></div>
          <p className="font-sans text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto">
            Combinamos tradição artesanal com design atemporal para criar móveis que são verdadeiras obras de arte.
          </p>
        </motion.div>

        {/* Grid de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 md:p-8 border border-brand-border hover:border-brand-olive bg-brand-bg-surface hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-0.5 bg-brand-olive mb-6 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-text-primary mb-4">
                {beneficio.title}
              </h3>
              <p className="font-sans text-brand-text-secondary leading-relaxed">
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 border border-brand-olive bg-brand-olive text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 overflow-hidden group/btn"
          >
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
              Iniciar Projeto Exclusivo
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Beneficios
