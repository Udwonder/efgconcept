import { HardHat, FileSignature, Landmark, Ship, Tractor, Factory, CheckCircle } from "lucide-react"

const services = [
  {
    title: "Contracting & Procurement",
    description: "We offer comprehensive contracting and procurement services designed to optimize value, minimize risk, and ensure timely delivery. Our capabilities include:",
    bullets: [
      "Strategic contract sourcing and tender management",
      "Supplier identification, evaluation, and negotiation",
      "End-to-end procurement lifecycle management",
      "Compliance with local content regulations and international standards"
    ],
    icon: FileSignature,
    color: "text-[hsl(var(--primary))]",
    bgColor: "bg-[hsl(var(--primary))]/10",
  },
  {
    title: "Industrial Development & Project Management",
    description: "We provide full-cycle project management services that transform concepts into operational realities. Our approach encompasses:",
    bullets: [
      "Feasibility studies and project planning",
      "Stakeholder coordination and regulatory navigation",
      "Quality assurance, cost control, and schedule management",
      "Post-completion handover and operational support"
    ],
    icon: Factory,
    color: "text-[hsl(var(--secondary))]",
    bgColor: "bg-[hsl(var(--secondary))]/10",
  },
  {
    title: "Financial & Investment Services",
    description: "Through strategic alliances with international financial institutions, we facilitate access to capital and investment structures that drive growth. Our services include:",
    bullets: [
      "Project finance structuring and syndication",
      "Investment advisory and due diligence",
      "Public-Private Partnership (PPP) facilitation",
      "Turnkey project financing"
    ],
    icon: Landmark,
    color: "text-[hsl(var(--primary))]",
    bgColor: "bg-[hsl(var(--primary))]/10",
  },
  {
    title: "Engineering & Construction",
    description: "We deliver robust engineering and construction solutions underpinned by technical excellence and safety. Our expertise covers:",
    bullets: [
      "Civil construction and infrastructure development",
      "Road and bridge construction",
      "Building construction and facility management",
      "Dredging, reclamation, and marine works"
    ],
    icon: HardHat,
    color: "text-[hsl(var(--secondary))]",
    bgColor: "bg-[hsl(var(--secondary))]/10",
  },
  {
    title: "Marine, Oil & Gas Services",
    description: "We support the energy and maritime sectors with specialized services that ensure operational continuity and project success:",
    bullets: [
      "Marine logistics and vessel support",
      "Offshore and onshore project execution",
      "Oil and gas infrastructure development",
      "Safety, security, and environmental compliance"
    ],
    icon: Ship,
    color: "text-[hsl(var(--primary))]",
    bgColor: "bg-[hsl(var(--primary))]/10",
  },
  {
    title: "Agro-Allied Services",
    description: "We are committed to unlocking the potential of Nigeria's agricultural sector through value-chain integration:",
    bullets: [
      "Commercial farming and out-grower schemes",
      "Agro-processing and manufacturing (e.g., cassava processing, bamboo paper production)",
      "Supply chain management and distribution",
      "Agricultural technology and mechanization"
    ],
    icon: Tractor,
    color: "text-[hsl(var(--secondary))]",
    bgColor: "bg-[hsl(var(--secondary))]/10",
  },
]

export default function Services() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://drive.google.com/thumbnail?id=14Ttvew1isEGfC2kmGIq8sV6XjgjLJ6P6&sz=w1920"
            alt="Our Services"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              End-to-End Solutions Across a Diversified Portfolio.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Comprehensive services designed to meet the complex needs of modern infrastructure and industrial development.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-24">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col sm:flex-row gap-6">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl ${service.bgColor}`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg leading-8 text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-4">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className={`h-6 w-6 ${service.color} shrink-0`} aria-hidden="true" />
                        <span className="leading-6">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
