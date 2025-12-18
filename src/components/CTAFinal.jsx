import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config/whatsapp'
import { FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi'

const CTAFinal = () => {
  const whatsappUrl = getWhatsAppUrl('ctaFinal')

  // Endereço Atualizado - Curitiba
  const endereco = 'Marcenaria Curitiba | O Mestre Marceneiro - Curitiba, PR'
  const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.26342478274!2d-49.36172019999999!3d-25.4628779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce274f4ae7ed5%3A0x5b5d42e066a920cf!2sMarcenaria%20Curitiba%20%7C%20O%20Mestre%20Marceneiro!5e0!3m2!1spt-BR!2sbr!4v1766063718630!5m2!1spt-BR!2sbr'

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-bg-light relative overflow-hidden border-t border-brand-border">
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
            Entre em <span className="text-brand-olive">Contato</span>
          </h2>
          <div className="w-24 h-0.5 bg-brand-olive mx-auto mb-6"></div>
          <p className="font-sans text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto">
            Visite nosso ateliê ou entre em contato para iniciar seu projeto exclusivo.
          </p>
        </motion.div>

        {/* Layout em duas colunas: Informações + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Coluna 1: Google Maps (Agora à esquerda/topo) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-full min-h-[400px] border border-brand-border overflow-hidden rounded-sm shadow-lg group"
          >
            {/* Overlay link para redirecionar */}
            <a
              href="https://maps.google.com/?q=Marcenaria+Curitiba+O+Mestre+Marceneiro"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label="Ver localização no Google Maps"
            >
              {/* Hover effect optional instruction can go here, for now just cursor-pointer */}
            </a>
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Localização O Mestre Marceneiro"
            ></iframe>
          </motion.div>

          {/* Coluna 2: Informações de Contato (Agora à direita/baixo) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Card de Informações */}
            <div className="bg-brand-bg-surface/80 backdrop-blur-sm border border-brand-border p-6 md:p-8 space-y-8 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-sm">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-text-primary mb-2">
                  O Mestre Marceneiro
                </h3>
                <p className="font-sans text-brand-text-secondary text-sm">
                  Transformando madeira em arte desde 2010.
                </p>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-olive/10 rounded-lg flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-brand-text-primary mb-1">
                    Ateliê
                  </h4>
                  <a
                    href="https://maps.google.com/?q=Marcenaria+Curitiba+O+Mestre+Marceneiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-brand-text-secondary leading-relaxed hover:text-brand-olive transition-colors block"
                  >
                    {endereco}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-olive/10 rounded-lg flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300">
                  <FiMessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-brand-text-primary mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-brand-text-secondary hover:text-brand-olive transition-colors duration-300 block"
                  >
                    Atendimento rápido e personalizado
                  </a>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-olive/10 rounded-lg flex items-center justify-center text-brand-olive group-hover:bg-brand-olive group-hover:text-white transition-all duration-300">
                  <FiClock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-brand-text-primary mb-1">
                    Horário
                  </h4>
                  <p className="font-sans text-brand-text-secondary leading-relaxed">
                    Seg a Sex: 8h às 18h<br />
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 border border-brand-olive bg-brand-olive text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 overflow-hidden group/btn w-full justify-center"
            >
              {/* Shimmer effect - Premium Shine */}
              <motion.div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200%]"
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              ></motion.div>


              <span className="relative z-10 font-sans text-sm md:text-base font-medium transition-colors duration-300">
                Iniciar Projeto Agora
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
      </div>
    </section>
  )
}

export default CTAFinal
