import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config/whatsapp'
import { FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi'

const CTAFinal = () => {
  const whatsappUrl = getWhatsAppUrl('ctaFinal')

  // Endereço Atualizado - Curitiba
  const endereco = 'R. Abraham Leiser Stier, 348 - Cidade Industrial de Curitiba, Curitiba - PR'
  const googleMapsClickUrl = 'https://www.google.com/maps/search/?api=1&query=R.+Abraham+Leiser+Stier,+348+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81260-010'
  const googleMapsEmbedUrl = 'https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=R.+Abraham+Leiser+Stier,+348+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81260-010&t=&z=15&ie=UTF8&iwloc=B&output=embed'

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-olive relative overflow-hidden border-t border-brand-border/10">
      {/* Pattern de textura sutil */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='lines' x='0' y='0' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cline x1='0' y1='0' x2='100' y2='0' stroke='%23FFFFFF' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23lines)'/%3E%3C/svg%3E")`,
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Entre em <span className="text-brand-bg-light/90">Contato</span>
          </h2>
          <div className="w-24 h-0.5 bg-white/20 mx-auto mb-6"></div>
          <p className="font-sans text-lg md:text-xl text-brand-bg-light/80 max-w-2xl mx-auto">
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
            className="relative h-[400px] md:h-[500px] lg:h-full min-h-[400px] border border-white/10 overflow-hidden rounded-sm shadow-2xl group"
          >
            {/* Overlay link para redirecionar */}
            <a
              href={googleMapsClickUrl}
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
              className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
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
            {/* Card de Informações - Glassmorphism Adaptado */}
            <div className="bg-brand-bg-surface/5 backdrop-blur-md border border-white/10 p-6 md:p-8 space-y-8 shadow-xl hover:shadow-2xl hover:bg-brand-bg-surface/10 transition-all duration-300 rounded-sm">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                  O Mestre Marceneiro
                </h3>
                <p className="font-sans text-brand-bg-light/70 text-sm">
                  Transformando madeira em arte desde 2010.
                </p>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-olive transition-all duration-300">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-white mb-1">
                    Ateliê
                  </h4>
                  <a
                    href={googleMapsClickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-brand-bg-light/80 leading-relaxed hover:text-white transition-colors block"
                  >
                    {endereco}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-olive transition-all duration-300">
                  <FiMessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-white mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-brand-bg-light/80 hover:text-white transition-colors duration-300 block"
                  >
                    Atendimento rápido e personalizado
                  </a>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-olive transition-all duration-300">
                  <FiClock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg font-bold text-white mb-1">
                    Horário
                  </h4>
                  <p className="font-sans text-brand-bg-light/80 leading-relaxed">
                    Seg a Sex: 8h às 18h<br />
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button - WhatsApp Green Pulse */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 6px -1px rgba(37, 211, 102, 0.2), 0 2px 4px -1px rgba(37, 211, 102, 0.1)",
                  "0 0 20px 5px rgba(37, 211, 102, 0.4)",
                  "0 4px 6px -1px rgba(37, 211, 102, 0.2), 0 2px 4px -1px rgba(37, 211, 102, 0.1)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
              className="inline-flex items-center gap-3 border border-[#25D366] bg-[#25D366] text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 overflow-hidden group/btn w-full justify-center rounded-sm"
            >



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
