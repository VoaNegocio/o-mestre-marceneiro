import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Sobre from './components/Sobre'
import Beneficios from './components/Beneficios'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-brand-bg-light text-brand-text-primary">
      <Header />
      <Hero />
      <Projetos />
      <Sobre />
      <Beneficios />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
