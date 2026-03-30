import { Sprout, Sun, Pickaxe, Factory } from "lucide-react"

const strategicAreas = [
  {
    title: "Agro-Industrialization",
    description: "Developing industrialized, technology-driven agro-integrated farming systems through large-scale mechanized operations and value-added processing.",
    icon: Sprout,
    color: "text-[hsl(var(--primary))]",
    bgColor: "bg-[hsl(var(--primary))]/10",
  },
  {
    title: "Alternative Energy",
    description: "Investing in sustainable power solutions (solar, hydro, biomass) to support the growing economies of Africa and Nigeria.",
    icon: Sun,
    color: "text-[hsl(var(--secondary))]",
    bgColor: "bg-[hsl(var(--secondary))]/10",
  },
  {
    title: "Strategic Resource Investment",
    description: "Deploying capital into solid mineral exploration and establishing private institutions in strategic, raw-material-rich regions.",
    icon: Pickaxe,
    color: "text-[hsl(var(--primary))]",
    bgColor: "bg-[hsl(var(--primary))]/10",
  },
]

const flagshipProjects = [
  {
    title: "Bamboo Paper Plant Factory",
    description: "Utilizing Nigeria's abundant bamboo resources to produce sustainable paper products and reduce import dependency.",
    icon: Factory,
    image: "https://drive.google.com/thumbnail?id=1UBwhwKC0UpX5dny0OjdfJzTutMBS9kgX&sz=w1000",
  },
  {
    title: "Cassava Processing Plant Factory",
    description: "A state-of-the-art facility processing cassava into high-value derivatives like starch and ethanol.",
    icon: Factory,
    image: "https://drive.google.com/thumbnail?id=1ZFac1TG4YcmIB3IEcDmkCVgYafryBg1Y&sz=w1000",
  },
]

export default function StrategicGrowth() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://drive.google.com/thumbnail?id=1iikr2G5nJquwnoHc535LRPpbOLfFX5tz&sz=w1920"
            alt="Strategic Growth"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Capitalizing on Global Economic Shifts.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Our 10-Year Roadmap outlines our strategic vision for sustainable growth and industrialization.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Areas */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {strategicAreas.map((area) => (
              <div key={area.title} className="flex flex-col items-center text-center bg-card border rounded-3xl p-10 shadow-sm">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-8 ${area.bgColor}`}>
                  <area.icon className={`h-10 w-10 ${area.color}`} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">{area.title}</h2>
                <p className="text-lg leading-8 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Flagship Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">Key initiatives driving our 10-year roadmap.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {flagshipProjects.map((project) => (
              <div key={project.title} className="bg-background border rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md">
                {project.image && (
                  <div className="h-72 w-full relative overflow-hidden group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      referrerPolicy="no-referrer" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                )}
                <div className="p-8 pt-4 flex flex-col sm:flex-row gap-6 items-start flex-1 relative z-10">
                  <div className="rounded-lg bg-[hsl(var(--secondary))]/10 p-4 shrink-0">
                    <project.icon className="h-8 w-8 text-[hsl(var(--secondary))]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
