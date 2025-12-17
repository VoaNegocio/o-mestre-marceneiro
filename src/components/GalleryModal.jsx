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
    return null // Não renderiza se não estiver aberto
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/80 backdrop-blur-2xl p-4 pt-8 md:pt-20 md:pb-8 cursor-pointer overflow-y-auto"
      onClick={onClose}
    >
      {/* Overlay com feedback visual */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>

      {/* Container do modal */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] cursor-default flex flex-col my-4 md:my-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Container da imagem */}
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-brand-border p-4 md:p-6 relative flex flex-col max-h-[90vh]">
          {/* Botão fechar - Dentro do modal */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 p-2 md:p-2.5 rounded-sm hover:bg-brand-border bg-white/90 backdrop-blur-sm z-20 border border-brand-border hover:border-brand-olive"
            aria-label="Fechar modal"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Imagem */}
          <div className="relative w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden">
            {/* Placeholder ou imagem real */}
            {currentImage.src ? (
              <img
                src={currentImage.src}
                alt={currentImage.alt || currentImage.nome}
                className="max-w-full max-h-[calc(90vh-280px)] w-auto h-auto object-contain"
              />
            ) : (
              <div className="w-full h-[60vh] bg-brand-bg-light rounded-sm flex items-center justify-center border border-brand-border">
                <span className="text-brand-text-muted text-xl font-sans font-medium">
                  {currentImage.nome}
                </span>
              </div>
            )}

            {/* Navegação com setas */}
            {images.length > 1 && (
              <>
                <button
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-brand-border hover:border-brand-olive text-brand-text-primary hover:text-brand-olive p-3 rounded-sm hover:scale-110 transition-all duration-300 z-10 shadow-lg"
                  aria-label="Imagem anterior"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-brand-border hover:border-brand-olive text-brand-text-primary hover:text-brand-olive p-3 rounded-sm hover:scale-110 transition-all duration-300 z-10 shadow-lg"
                  aria-label="Próxima imagem"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Informações do projeto */}
          <div className="mt-4 text-center flex-shrink-0">
            <h3 className="font-serif text-brand-text-primary text-2xl md:text-3xl font-bold mb-2">
              {currentImage.nome}
            </h3>
            {currentImage.descricao && (
              <p className="font-sans text-brand-text-secondary text-sm md:text-base max-w-2xl mx-auto">
                {currentImage.descricao}
              </p>
            )}
          </div>

          {/* Contador e indicadores */}
          {images.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-4 flex-shrink-0">
              {/* Contador */}
              <span className="font-sans text-brand-text-secondary text-sm md:text-base font-medium">
                {currentIndex + 1} / {images.length}
              </span>

              {/* Indicadores */}
              <div className="flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onSelectImage(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-brand-olive'
                        : 'w-1 bg-brand-border hover:bg-brand-olive/50'
                    }`}
                    aria-label={`Ir para projeto ${index + 1}`}
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

