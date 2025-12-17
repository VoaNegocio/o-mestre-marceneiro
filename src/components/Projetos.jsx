import ProjectGallery from './ProjectGallery'

const Projetos = () => {
  return (
    <section id="projetos" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-bg-light relative overflow-hidden">
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
        {/* Título da seção - Estilo Dark Luxury */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-4 tracking-tight">
            A <span className="text-brand-olive">Galeria</span>
          </h2>
          <div className="w-24 h-0.5 bg-brand-olive mx-auto mb-6"></div>
          <p className="font-sans text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto leading-relaxed">
            Cada projeto é uma obra única. Onde o artesanato encontra o design atemporal.
          </p>
        </div>

        {/* Galeria de Projetos */}
        <ProjectGallery />
      </div>
    </section>
  )
}

export default Projetos
