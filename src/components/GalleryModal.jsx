import { useEffect } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function GalleryModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
  onSelectImage,
}) {
  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Previne scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !images || images.length === 0) {
    return null
  }

  const currentImage = images[currentIndex]

  return (
    <div
      // CORREÇÃO AQUI: 'items-center' em vez de 'items-start' e remoção de paddings complexos
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 cursor-pointer overflow-hidden"
      onClick={onClose}
    >
      {/* Overlay com feedback visual */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>

      {/* Container do modal */}
      <div
        // Ajuste de altura máxima para mobile (95vh) para aproveitar melhor a tela
        className="relative max-w-5xl w-full max-h-[95vh] md:max-h-[90vh] cursor-default flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Container da imagem e conteúdo */}
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-brand-border p-4 md:p-6 relative flex flex-col h-full max-h-full">
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 p-2 rounded-sm hover:bg-brand-border bg-white/90 backdrop-blur-sm z-30 border border-brand-border hover:border-brand-olive shadow-sm"
            aria-label="Fechar modal"
          >
            <FiX className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Área da Imagem */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-brand-bg-light/30 rounded-sm">
            {currentImage.src ? (
              <img
                src={currentImage.src}
                alt={currentImage.alt || currentImage.nome}
                // Ajuste no object-contain para garantir que a imagem inteira apareça sem cortes
                className="max-w-full max-h-full w-auto h-auto object-contain shadow-sm"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-brand-text-muted text-lg">Imagem indisponível</span>
              </div>
            )}

            {/* Navegação */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); onPrev(); }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-brand-border hover:border-brand-olive text-brand-text-primary hover:text-brand-olive p-2 md:p-3 rounded-full hover:scale-105 transition-all duration-300 z-20 shadow-lg group"
                >
                  <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onNext(); }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-brand-border hover:border-brand-olive text-brand-text-primary hover:text-brand-olive p-2 md:p-3 rounded-full hover:scale-105 transition-all duration-300 z-20 shadow-lg group"
                >
                  <FiChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Rodapé do Modal (Info) */}
          <div className="mt-4 md:mt-6 text-center flex-shrink-0">
            <h3 className="font-serif text-brand-text-primary text-xl md:text-3xl font-bold mb-1 md:mb-2">
              {currentImage.nome}
            </h3>
            {currentImage.descricao && (
              <p className="font-sans text-brand-text-secondary text-xs md:text-base max-w-2xl mx-auto line-clamp-2 md:line-clamp-none">
                {currentImage.descricao}
              </p>
            )}
          </div>

          {/* Indicadores */}
          {images.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-4 flex-shrink-0">
              <span className="font-sans text-brand-text-secondary text-xs md:text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
              <div className="hidden md:flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); onSelectImage(index); }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-brand-olive'
                        : 'w-1 bg-brand-border hover:bg-brand-olive/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryModal