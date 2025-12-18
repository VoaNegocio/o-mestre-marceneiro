import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { getWhatsAppUrl } from '../config/whatsapp'
import { FiStar } from 'react-icons/fi'

const Depoimentos = () => {
    const whatsappUrl = getWhatsAppUrl('depoimentos')
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollContainerRef = useRef(null)

    const reviews = [
        {
            name: 'Ricardo Almeida',
            role: 'Projeto Residencial',
            text: 'Superou todas as expectativas. O acabamento é impecável e a equipe foi extremamente profissional desde o design até a instalação. Minha cozinha ficou exatamente como eu sonhava.',
            stars: 5,
        },
        {
            name: 'Fernanda Costa',
            role: 'Apartamento Completo',
            text: 'A atenção aos detalhes é impressionante. Você percebe que é um trabalho artesanal de verdade. Entregaram no prazo e deixaram tudo limpo e montado perfeitamente.',
            stars: 5,
        },
        {
            name: 'Carlos & Ana',
            role: 'Escritório Corporativo',
            text: 'Contratamos para o escritório da nossa advocacia e o resultado foi um ambiente sofisticado e funcional. Os clientes sempre elogiam a elegância dos móveis.',
            stars: 5,
        },
    ]

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollLeft = container.scrollLeft
            const width = container.offsetWidth
            const index = Math.round(scrollLeft / width)
            setActiveIndex(index)
        }
    }

    const scrollToSlide = (index) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const width = container.offsetWidth
            container.scrollTo({
                left: width * index,
                behavior: 'smooth'
            })
            setActiveIndex(index)
        }
    }

    return (
        <section id="depoimentos" className="py-16 md:py-24 lg:py-32 px-4 bg-brand-bg-light relative overflow-hidden">
            {/* Gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4A5D46]/3 via-transparent to-[#4A5D46]/5"></div>

            {/* Padrão de textura */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='lines' x='0' y='0' width='100' height='20' patternUnits='userSpaceOnUse'%3E%3Cline x1='0' y1='0' x2='100' y2='0' stroke='%234A5D46' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23lines)'/%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título da seção */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text-primary mb-4 tracking-tight">
                        Nossos <span className="text-brand-olive">Clientes</span>
                    </h2>
                    <div className="w-24 h-0.5 bg-brand-olive mx-auto mb-6"></div>
                    <p className="font-sans text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto">
                        Histórias de quem transformou seus ambientes com a nossa marcenaria.
                    </p>
                </motion.div>

                {/* Grid de Depoimentos (Scroll Horizontal no Mobile / Grid no Desktop) */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16 overflow-x-auto snap-x scrollbar-hide pb-4 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0"
                >
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="min-w-[85%] md:min-w-0 snap-center group p-8 border border-brand-border bg-brand-bg-surface hover:shadow-xl hover:border-brand-olive/30 transition-all duration-300 relative rounded-sm flex flex-col items-center text-center mx-2 md:mx-0 first:ml-4 last:mr-4 md:first:ml-0 md:last:mr-0"
                        >
                            {/* Aspas decorativas */}
                            <div className="absolute top-4 left-6 text-6xl font-serif text-brand-olive/10 group-hover:text-brand-olive/20 transition-colors duration-300">
                                &ldquo;
                            </div>

                            {/* Estrelas */}
                            <div className="flex gap-1 mb-6 text-brand-olive">
                                {[...Array(review.stars)].map((_, i) => (
                                    <FiStar key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>

                            {/* Texto */}
                            <p className="font-sans text-brand-text-secondary text-lg leading-relaxed mb-8 italic relative z-10">
                                "{review.text}"
                            </p>

                            {/* Autor */}
                            <div className="mt-auto">
                                <div className="w-8 h-0.5 bg-brand-olive mx-auto mb-3"></div>
                                <h4 className="font-serif text-lg font-bold text-brand-text-primary">
                                    {review.name}
                                </h4>
                                <p className="font-sans text-xs uppercase tracking-widest text-brand-text-secondary/70 mt-1">
                                    {review.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Indicadores (Dots) - Mobile Only */}
                <div className="flex justify-center gap-2 mb-12 md:hidden">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToSlide(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                ? 'w-8 bg-brand-olive'
                                : 'w-2.5 bg-brand-olive/30 hover:bg-brand-olive/50'
                                }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 border border-brand-olive bg-brand-olive text-white px-8 md:px-10 py-4 md:py-5 transition-all duration-300 overflow-hidden group/btn"
                    >
                        {/* Shimmer effect - Premium Shine */}
                        <motion.div
                            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200%]"
                            initial={{ x: '-150%' }}
                            animate={{ x: '150%' }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                            }}
                        ></motion.div>

                        <span className="relative z-10 font-sans text-sm md:text-base font-medium transition-colors duration-300">
                            Iniciar Projeto
                        </span>
                        <div className="relative z-10 w-0.5 h-4 bg-white/30 transition-colors duration-300"></div>
                        <motion.svg
                            className="relative z-10 w-4 h-4 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                                x: [0, 4, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Depoimentos
