import { FiMessageCircle } from 'react-icons/fi'
import { getWhatsAppUrl } from '../config/whatsapp'

const Footer = () => {
  const whatsappUrl = getWhatsAppUrl('footer')

  return (
    <footer className="bg-brand-bg-surface border-t border-brand-border text-brand-text-primary py-12 md:py-16 px-4 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-brand-olive">O Mestre Marceneiro</h3>
            <p className="font-sans text-brand-text-secondary leading-relaxed">
              Criando móveis sob medida com excelência artesanal e design atemporal para transformar seus espaços.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-brand-olive">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="font-sans text-brand-text-secondary hover:text-brand-olive transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="font-sans text-brand-text-secondary hover:text-brand-olive transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="font-sans text-brand-text-secondary hover:text-brand-olive transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="font-sans text-brand-text-secondary hover:text-brand-olive transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-brand-olive">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-brand-text-secondary hover:text-brand-olive transition-colors"
                >
                  <FiMessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-border pt-8 text-center">
          <p className="font-sans text-brand-text-muted text-sm">
            &copy; {new Date().getFullYear()} O Mestre Marceneiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
