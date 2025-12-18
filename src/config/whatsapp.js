// Configuração centralizada do WhatsApp
const WHATSAPP_NUMBER = '554133739786' // O Mestre Marceneiro

const MESSAGES = {
  hero: 'Olá! Gostaria de solicitar um orçamento personalizado para móveis sob medida.',
  beneficios: 'Olá! Quero saber mais sobre os móveis sob medida.',
  depoimentos: 'Olá! Vi os depoimentos e gostaria de iniciar meu projeto.',
  projetos: 'Olá! Gostaria de ver mais projetos realizados.',
  ctaFinal: 'Olá! Quero transformar meu ambiente com móveis sob medida agora mesmo!',
  footer: 'Olá! Gostaria de mais informações sobre móveis sob medida.',
  whatsappButton: 'Olá! Gostaria de solicitar um orçamento personalizado.',
}

export const getWhatsAppUrl = (section) => {
  const message = encodeURIComponent(MESSAGES[section] || MESSAGES.whatsappButton)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export { WHATSAPP_NUMBER, MESSAGES }

