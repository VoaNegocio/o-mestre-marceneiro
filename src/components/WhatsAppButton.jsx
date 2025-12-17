import { FiMessageCircle } from 'react-icons/fi'
import { getWhatsAppUrl } from '../config/whatsapp'

const WhatsAppButton = () => {
  const whatsappUrl = getWhatsAppUrl('whatsappButton')

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <div className="relative">
        {/* Tooltip no hover (desktop) */}
        <div className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-text-primary text-white border border-brand-border px-4 py-2 text-xs font-sans whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
          Fale conosco
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-text-primary"></div>
        </div>

        {/* Botão flutuante */}
        <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white p-4 shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110">
          <FiMessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </a>
  )
}

export default WhatsAppButton

