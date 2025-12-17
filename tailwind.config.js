/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta baseada na identidade da marca O Mestre Marceneiro
        brand: {
          // COR PRINCIPAL: Verde Oliva da logo (cor de destaque)
          olive: '#4A5D46',
          
          // CORES DE FUNDO
          'bg-light': '#FAFAFA', // Off-white - fundo principal
          'bg-surface': '#FFFFFF', // Branco - cards e superfícies
          
          // CORES DE TEXTO
          'text-primary': '#1F1F1F', // Preto suave - texto principal
          'text-secondary': '#666666', // Cinza médio - texto secundário
          'text-muted': '#999999', // Cinza claro - texto desabilitado
          
          // BORDAS E DIVISÓRIAS
          border: '#E5E5E5', // Bordas sutis
          'border-dark': '#CCCCCC', // Bordas mais visíveis
        },
        // Legacy colors (mantidas para compatibilidade durante transição)
        'luxury-black': '#1F1F1F',
        'dark-charcoal': '#333333',
        'off-white': '#FAFAFA',
        'luxury-dark': '#1F1F1F',
        'luxury-surface': '#FFFFFF',
        'luxury-olive': '#4A5D46',
        'luxury-ivory': '#1F1F1F',
        'luxury-gray': '#666666',
        'marceneiro-marrom': '#8B4513',
        'marceneiro-marrom-escuro': '#654321',
        'marceneiro-ouro': '#D4AF37',
        'marceneiro-madeira': '#DEB887',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

