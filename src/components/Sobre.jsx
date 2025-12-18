import { motion } from 'framer-motion'

const Sobre = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-bg-light relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Conteúdo textual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-6 tracking-tight">
              A <span className="text-brand-olive">Herança</span> do Artesanato
            </h2>

            <div className="w-16 h-0.5 bg-brand-olive mb-8"></div>

            {/* Imagem Mobile (Aparece abaixo do título apenas no mobile) */}
            <div className="block lg:hidden mb-8 relative">
              <div className="aspect-square bg-brand-bg-light border border-brand-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-0.5 bg-brand-olive mx-auto mb-6"></div>
                  <p className="font-serif text-2xl text-brand-text-primary mb-4">O Mestre</p>
                  <p className="font-sans text-brand-text-secondary text-sm uppercase tracking-widest">Foto do Artesão</p>
                  <div className="w-24 h-0.5 bg-brand-olive mx-auto mt-6"></div>
                </div>
              </div>
            </div>

            <p className="font-sans text-lg text-brand-text-secondary mb-6 leading-relaxed">
              Com anos de dedicação à excelência, criamos móveis sob medida que unem a tradição artesanal
              com o design atemporal. Cada peça é pensada e executada com a atenção de um mestre.
            </p>
            <p className="font-sans text-lg text-brand-text-secondary mb-10 leading-relaxed">
              Nossa missão é transformar seus espaços em ambientes únicos, onde cada móvel conta uma história
              de qualidade, cuidado e paixão pelo ofício.
            </p>

            {/* Características - Minimalistas */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-0.5 h-12 bg-brand-olive mt-1"></div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-text-primary mb-2">Artesanal</h3>
                  <p className="font-sans text-brand-text-secondary">Trabalho manual de alta qualidade e atenção aos mínimos detalhes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-0.5 h-12 bg-brand-olive mt-1"></div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-text-primary mb-2">Bespoke</h3>
                  <p className="font-sans text-brand-text-secondary">Cada projeto é único e feito exclusivamente para você.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-0.5 h-12 bg-brand-olive mt-1"></div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-text-primary mb-2">Legado</h3>
                  <p className="font-sans text-brand-text-secondary">Móveis que atravessam gerações, tornando-se parte da história familiar.</p>
                </div>
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
            <div className="aspect-square bg-brand-bg-light border border-brand-border flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-0.5 bg-brand-olive mx-auto mb-6"></div>
                <p className="font-serif text-2xl text-brand-text-primary mb-4">O Mestre</p>
                <p className="font-sans text-brand-text-secondary text-sm uppercase tracking-widest">Foto do Artesão</p>
                <div className="w-24 h-0.5 bg-brand-olive mx-auto mt-6"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sobre

