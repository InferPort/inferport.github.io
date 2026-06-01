"use client"

import { motion, useReducedMotion } from "motion/react"
import { Zap, Eye, Users, Layers } from "lucide-react"

interface StackCardData {
  icon: React.ElementType
  title: string
  text: string
  gradient: string
}

const cards: StackCardData[] = [
  {
    icon: Zap,
    title: "Respuesta rápida",
    text: "Te respondemos en menos de 24 horas. Sin esperas ni largos procesos de contratación. Agilizamos tu proyecto desde el primer contacto.",
    gradient: "from-brand-500/20 via-brand-500/5 to-transparent",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    text: "Presupuestos claros sin costos ocultos. Sabes exactamente lo que pagas antes de empezar. Sin sorpresas ni cargos adicionales.",
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    icon: Users,
    title: "Expertos certificados",
    text: "Técnicos con experiencia comprobada en desarrollo, infraestructura y soporte técnico. Años de experiencia respaldan cada solución.",
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
  },
  {
    icon: Layers,
    title: "Solución integral",
    text: "Desarrollo, infraestructura y soporte en un solo lugar. Un solo proveedor, cero complicaciones. Coordinamos todo por ti.",
    gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
  },
]

function StackCard({
  card,
  reduce,
}: {
  card: StackCardData
  reduce: boolean
}) {
  const Icon = card.icon

  return (
    <motion.div
      className="sticky top-24 min-h-[85vh] flex items-center py-8"
      initial={!reduce ? { opacity: 0, y: 60 } : false}
      whileInView={!reduce ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="w-full max-w-5xl mx-auto px-4">
        <div
          className={`p-[1px] rounded-[2rem] bg-gradient-to-b ${card.gradient}`}
        >
          <div className="rounded-[calc(2rem-1px)] bg-surface p-10 md:p-14">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-8">
              <Icon className="w-8 h-8 text-brand-400" />
            </div>

            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
              {card.title}
            </h3>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-3xl">
              {card.text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function StickyStack() {
  const reduce = useReducedMotion()

  return (
    <div className="relative">
      <div className="h-[30vh]" />

      {cards.map((card) => (
        <StackCard key={card.title} card={card} reduce={reduce} />
      ))}

      <div className="h-[30vh]" />
    </div>
  )
}
