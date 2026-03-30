import { ArrowRight, CheckCircle2, Globe, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://drive.google.com/thumbnail?id=1GUUpS-41eIWLd0LXlG-4xxK28erZt_ki&sz=w1920"
            alt="Pipeline Construction"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Engineering Progress with <span className="text-[hsl(var(--primary))] drop-shadow-sm">Excellence</span> & <span className="text-[hsl(var(--secondary))] drop-shadow-sm">Fortitude</span>.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              A dynamic Nigerian partner for infrastructure, industrial development, and strategic investments.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-[hsl(var(--primary))] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[hsl(var(--primary))]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--primary))]"
              >
                Partner With Us
              </Link>
              <Link to="/about" className="text-sm font-semibold leading-6 text-black flex items-center gap-1 hover:text-gray-700 transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who We Are</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              E & F General Concepts Limited is a proudly Nigerian company, duly registered with the Corporate Affairs Commission (CAC) to operate across critical sectors of the economy.
            </p>
          </div>
        </div>
      </section>

      {/* The Edge Section */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[hsl(var(--secondary))]">Our Philosophy</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Excellence & Fortitude Edge
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our name reflects our core philosophy: Excellence & Fortitude—the pursuit of superior outcomes backed by resilience and unwavering commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Fact Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground flex flex-col items-center gap-2">
                <CheckCircle2 className="h-8 w-8 text-[hsl(var(--primary))]" />
                Success Rate
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                90-100%
              </dd>
              <dd className="text-sm text-muted-foreground">project success rates</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground flex flex-col items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-[hsl(var(--primary))]" />
                Standards
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                ISO & IATA
              </dd>
              <dd className="text-sm text-muted-foreground">Internationally recognized benchmarks</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-muted-foreground flex flex-col items-center gap-2">
                <Globe className="h-8 w-8 text-[hsl(var(--primary))]" />
                Network
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Global
              </dd>
              <dd className="text-sm text-muted-foreground">Robust global and local linkages</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
