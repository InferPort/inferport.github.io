"use client"

import { useState, type FormEvent } from "react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"
import { Label } from "./ui/Label"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get("name") as string
    const email = data.get("email") as string
    const subject = data.get("subject") as string
    const message = data.get("message") as string

    if (!name || !email || !message) return

    const mailto = `mailto:info@inferport.co?subject=${encodeURIComponent(subject || "Contacto InferPort")}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)}`

    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div class="rounded-xl bg-surface-elevated border border-border p-8 text-center">
        <div class="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle class="w-6 h-6 text-brand-400" />
        </div>
        <h3 class="text-lg font-semibold text-ink mb-2">Mensaje enviado</h3>
        <p class="text-sm text-ink-secondary">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div class="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div class="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
          />
        </div>
      </div>

      <div class="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>

      <div class="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
          required
        />
      </div>

      <Button type="submit" variant="primary" size="lg" class="w-full sm:w-auto">
        Enviar mensaje
        <Send class="w-4 h-4" />
      </Button>
    </form>
  )
}
