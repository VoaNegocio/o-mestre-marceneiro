# Dev Log - O Mestre Marceneiro Landing Page

Log de desenvolvimento documentando erros encontrados e suas correções.

---

## 📋 Estrutura

- **Data**: Data da identificação/correção
- **Status**: 🐛 Erro | ✅ Corrigido | 🔄 Em Andamento
- **Componente**: Arquivo/componente afetado
- **Descrição**: Descrição do problema
- **Correção**: Solução aplicada

---

## 🔍 Registros

### Erro #001
**Data**: 2024-12-XX  
**Status**: ✅ Corrigido  
**Componente**: `src/components/CategoryFilter.jsx`  
**Descrição**: 
- No mobile, o scroll horizontal das categorias não começava pela primeira categoria ("Cozinha")
- O filtro iniciava mostrando "Quarto" ou outras categorias do meio da lista
- Faltava reset do scroll ao montar o componente

**Correção**:
- Adicionado `useRef` para referenciar o container do scroll
- Implementado `useEffect` que reseta `scrollLeft = 0` ao montar o componente
- Implementado scroll automático para centralizar a categoria ativa quando ela muda
- Adicionado sistema de refs para os botões das categorias para permitir scroll suave até o elemento ativo

**Código aplicado**:
```javascript
const scrollContainerRef = useRef(null)
const buttonRefs = useRef({})

// Scroll para o início no mobile quando o componente montar
useEffect(() => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollLeft = 0
  }
}, [])

// Scroll para a categoria ativa quando ela mudar
useEffect(() => {
  const activeButton = buttonRefs.current[activeCategory]
  if (activeButton && scrollContainerRef.current) {
    const container = scrollContainerRef.current
    const scrollLeft = activeButton.offsetLeft - (container.offsetWidth / 2) + (activeButton.offsetWidth / 2)
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    })
  }
}, [activeCategory])
```

---

### Erro #002
**Data**: 2024-12-XX  
**Status**: ✅ Corrigido  
**Componente**: `src/data/projects.js`  
**Descrição**: 
- Categoria "cozinha" tinha 13 imagens disponíveis, mas apenas 10 projetos estavam definidos no código
- Faltavam os projetos `cozinha-11`, `cozinha-12`, e `cozinha-13`

**Correção**:
- Adicionados os 3 projetos faltantes com nomes, descrições e tags apropriadas
- Garantido que todas as 13 imagens estão vinculadas corretamente aos projetos

---

### Erro #003
**Data**: 2024-12-XX  
**Status**: ✅ Corrigido  
**Componente**: `src/data/projects.js` - Categoria "sala"  
**Descrição**: 
- Categoria "sala" tinha um projeto com `src: null`
- Quando filtrado por `.filter(p => p.src)`, o array `activeProjects` ficava vazio
- Operações de módulo com zero (`% 0`) resultavam em `NaN`, quebrando a navegação

**Correção**:
- Projeto comentado completamente até que imagens estejam disponíveis
- Sistema agora trata corretamente categorias vazias

---

### Erro #004
**Data**: 2024-12-XX  
**Status**: ✅ Corrigido  
**Componente**: `src/components/HeroBackground.jsx`  
**Descrição**: 
- Overlay escuro estava muito intenso, tornando as imagens de fundo pouco visíveis
- Texto legível, mas experiência visual comprometida

**Correção**:
- Ajustado overlay de `from-luxury-black/80 via-luxury-black/70 to-luxury-black/80` para valores mais sutis
- Mudado para overlay claro `from-white/60 via-white/40 to-white/60` para melhor visualização das imagens
- Mantida legibilidade do texto com overlay adicional sutil

---

### Erro #005
**Data**: 2024-12-XX  
**Status**: ✅ Corrigido  
**Componente**: `src/components/GalleryModal.jsx`  
**Descrição**: 
- Modal estava centralizado verticalmente
- Em desktop, posicionamento muito centralizado não aproveitava bem o espaço

**Correção**:
- Adicionado `md:pt-16` para descer ligeiramente o modal no desktop
- Mantida centralização mas com mais espaço superior

---

## 📝 Notas de Desenvolvimento

### Paleta de Cores - Migração para Brand Colors
**Data**: 2024-12-XX  
**Status**: ✅ Completo

- Migração de paleta "Dark Luxury" para paleta baseada na identidade da marca
- Removido dourado (`luxury-gold`)
- Implementado esquema claro com off-white (`#FAFAFA`) como background principal
- Verde oliva (`#4A5D46`) como cor de destaque principal
- Todos os componentes atualizados para usar as novas cores `brand-*`

### Background Pattern
**Data**: 2024-12-XX  
**Status**: ✅ Completo

- Implementado padrão de linhas paralelas horizontais em verde oliva
- Opacidade de 15% para sutilidade
- Espaçamento de 20px entre linhas
- Implementado via SVG inline no CSS global

---

## 🔄 Melhorias Futuras / Pendências

### UX Modal - Navegação por Teclado
**Status**: 🔄 Pendente  
**Descrição**: 
- Implementar navegação por setas do teclado (← →) no modal de galeria
- Atualmente apenas ESC para fechar está implementado

### UX Modal - Indicadores
**Status**: 🔄 Pendente  
**Descrição**: 
- Aumentar tamanho dos indicadores de posição (atualmente `h-1` muito pequeno)
- Com 13+ imagens, área de clique fica muito pequena para precisão do mouse

### Modo Dia/Noite
**Status**: 🔄 Pendente  
**Descrição**: 
- Implementar toggle para alternar entre modo claro (atual) e modo escuro
- Usar Context API para gerenciamento de tema global
- Persistir preferência no `localStorage`

---

### Erro #004
**Data**: 2024-12-XX  
**Status**: ✅ Corrigido  
**Componente**: `src/components/GalleryModal.jsx`  
**Descrição**: 
- No desktop, quando as imagens são verticais, o modal ficava muito grande e cortava a imagem e a div
- O modal não respeitava os limites da viewport (90vh)
- Imagens verticais não eram exibidas corretamente, ficando cortadas

**Correção**:
1. Adicionado `max-h-[90vh]` e `flex flex-col` no container principal do modal
2. Container interno também com `max-h-[90vh]` e `flex flex-col` para controlar layout
3. Container da imagem com `flex-1 flex items-center justify-center min-h-0 overflow-hidden` para centralizar e permitir scroll quando necessário
4. Altura máxima da imagem ajustada para `max-h-[calc(90vh-280px)]` para reservar espaço para título, descrição e indicadores
5. Informações e indicadores com `flex-shrink-0` para evitar que encolham
6. Padding-top aumentado no desktop de `md:pt-16` para `md:pt-20` para posicionar o modal um pouco mais abaixo
7. Adicionado `overflow-y-auto` no container principal para permitir scroll se necessário

**Código aplicado**:
```jsx
// Container principal
<div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/80 backdrop-blur-2xl p-4 pt-8 md:pt-20 md:pb-8 cursor-pointer overflow-y-auto">

// Container do modal
<div className="relative max-w-5xl w-full max-h-[90vh] cursor-default flex flex-col my-4 md:my-0">

// Container interno
<div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-brand-border p-4 md:p-6 relative flex flex-col max-h-[90vh]">

// Container da imagem
<div className="relative w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden">
  <img className="max-w-full max-h-[calc(90vh-280px)] w-auto h-auto object-contain" />
</div>
```

**Resultado**:
- Modal não ultrapassa 90vh de altura total
- Imagens verticais são exibidas corretamente sem cortes
- Título, descrição e indicadores sempre visíveis
- Modal ajusta-se dinamicamente a diferentes tamanhos de imagem
- Posicionamento melhorado no desktop (desce um pouco mais)

---

## 📚 Referências Úteis

- Tailwind CSS v3.4.17 (versão estável com Vite)
- Framer Motion para animações
- React Icons (Feather Icons)
- Padrão de código: ESLint configurado

