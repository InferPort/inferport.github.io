# InferPort Landing Page — Mejoras v2

## 1. Hero — Eliminar ubicación

**Archivo:** `src/components/Hero.astro`

**Cambios:**
1. Eliminar el bloque del eyebrow:
```astro
<p class="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-brand-400 mb-6">
  <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
  Cali, Colombia
</p>
```

2. Cambiar subtexto de:
```
Expertos en software, infraestructura y asistencia remota desde Cali para Colombia.
```
a:
```
Expertos en software, infraestructura y soporte técnico para impulsar tu negocio.
```

---

## 2. Services — Fix padding

**Archivo:** `src/components/ui/Card.tsx`

**Problema:** `CardContent` tiene `p-8 pt-0` — el icono dentro del card no tiene espacio arriba.

**Solución:** Cambiar `className` de `CardContent` de `"p-6 pt-0"` a `"p-8"` (consistencia con el p-8 usado en Services.astro).

**Archivo:** `src/components/Services.astro`

El CardContent ya usa `class="p-8"` — pero como el componente Card.tsx define `p-6 pt-0`, ese valor gana cuando se pasa `className`. O cambiar el componente, o usar un div en vez de CardContent.

**Mejor solución:** Cambiar en Services.astro de `<CardContent class="p-8">` a simplemente un `<div class="p-8">` dentro del Card (para evitar conflicto con las clases de CardContent).

---

## 3. Nueva sección: "Por qué InferPort"

**Archivo nuevo:** `src/components/WhyInferPort.astro`

### Contenido:
```
Sección con grid 2x2 (4 cards de diferenciales)

1. Respuesta rápida (Zap)
   "Soporte técnico en menos de 24 horas. Sin esperas ni largos procesos."

2. Transparencia (ShieldCheck / Eye)
   "Presupuestos claros sin costos ocultos. Sabes exactamente lo que pagas."

3. Expertos certificados (Users)
   "Técnicos con experiencia comprobada en desarrollo, infraestructura y soporte."

4. Solución integral (Layers)
   "Desarrollo, infraestructura y soporte en un solo lugar. Un solo proveedor."
```

### Layout:
```astro
<Section>
  <Fragment slot="title">¿Por qué <span class="text-brand-400">InferPort</span>?</Fragment>
  <Fragment slot="subtitle">Razones por las que nuestros clientes confían en nosotros.</Fragment>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {diferencias.map((item, i) => (
      <Card class="animate-on-scroll" style="animation-delay: {i * 0.1}s">
        <CardContent class="flex gap-5 p-8">
          <div class="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
            <item.icon class="w-6 h-6 text-brand-400" />
          </div>
          <div>
            <h3 class="font-semibold text-ink mb-1">{item.title}</h3>
            <p class="text-sm text-ink-secondary">{item.text}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</Section>
```

---

## 4. Nueva sección: "Cómo trabajamos"

**Archivo nuevo:** `src/components/Process.astro`

### Contenido:
```
4 pasos con timeline horizontal:

1. Diagnóstico (Search)
   "Analizamos tu situación y entendemos tus necesidades tecnológicas."

2. Propuesta (FileText)
   "Te presentamos la solución con alcance, tiempos y presupuesto claro."

3. Ejecución (Rocket)
   "Implementamos la solución acordada con estándares de calidad."

4. Soporte (HeartHandshake)
   "Acompañamiento continuo post-servicio para garantizar resultados."
```

### Layout:
```astro
<Section>
  <Fragment slot="title">Cómo <span class="text-brand-400">trabajamos</span></Fragment>
  <Fragment slot="subtitle">Un proceso simple y transparente de principio a fin.</Fragment>

  <div class="relative grid grid-cols-1 md:grid-cols-4 gap-8">
    <!-- Línea conectora horizontal (solo desktop) -->
    <div class="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />
    
    {pasos.map((paso, i) => (
      <div class="relative flex flex-col items-center text-center animate-on-scroll" style="animation-delay: {i * 0.12}s">
        <div class="w-24 h-24 rounded-full bg-brand-500/10 flex items-center justify-center mb-6 relative z-10 border-2 border-brand-500/20">
          <paso.icon class="w-8 h-8 text-brand-400" />
        </div>
        <span class="text-xs font-mono tracking-wider text-brand-400 mb-2">PASO 0{i + 1}</span>
        <h3 class="text-lg font-semibold text-ink mb-2">{paso.title}</h3>
        <p class="text-sm text-ink-secondary max-w-xs">{paso.text}</p>
      </div>
    ))}
  </div>
</Section>
```

---

## 5. Nueva sección: "Tecnologías"

**Archivo nuevo:** `src/components/TechStack.astro`

### Contenido:
Logos de tecnologías usando Simple Icons CDN.

Lista de tecnologías:
- React, Node.js, TypeScript, Python, Docker, Linux, AWS, PostgreSQL, MongoDB, Git

### Layout:
```astro
<Section>
  <Fragment slot="title">Tecnologías que <span class="text-brand-400">dominamos</span></Fragment>
  <Fragment slot="subtitle">Trabajamos con las herramientas más modernas del mercado.</Fragment>

  <div class="grid grid-cols-5 md:grid-cols-10 gap-8 items-center justify-items-center">
    {techs.map(tech => (
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/94a6aa`}
        alt={tech.name}
        class="h-8 w-auto opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
        loading="lazy"
      />
    ))}
  </div>
</Section>
```

### Tech list:
```ts
const techs = [
  { slug: "react", name: "React" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "python", name: "Python" },
  { slug: "docker", name: "Docker" },
  { slug: "linux", name: "Linux" },
  { slug: "amazonwebservices", name: "AWS" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "mongodb", name: "MongoDB" },
  { slug: "git", name: "Git" },
]
```

---

## 6. index.astro — Agregar nuevas secciones

**Archivo:** `src/pages/index.astro`

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro"
import Navbar from "@/components/Navbar.astro"
import Hero from "@/components/Hero.astro"
import WhyInferPort from "@/components/WhyInferPort.astro"
import Process from "@/components/Process.astro"
import Services from "@/components/Services.astro"
import TechStack from "@/components/TechStack.astro"
import Contact from "@/components/Contact.astro"
import Footer from "@/components/Footer.astro"
---

<BaseLayout>
  <Navbar />
  <main>
    <Hero />
    <WhyInferPort />
    <Process />
    <Services />
    <TechStack />
    <Contact />
  </main>
  <Footer />
</BaseLayout>
```

---

## Orden de implementación sugerido

1. Hero — copy sin ubicación
2. Card padding fix
3. WhyInferPort.astro
4. Process.astro
5. TechStack.astro
6. index.astro (importar nuevas secciones)
7. `npm run build` para verificar
