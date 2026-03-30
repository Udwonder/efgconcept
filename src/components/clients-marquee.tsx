import { cn } from "../lib/utils"

const clients = [
  {
    id: 1,
    name: "Client 1",
    logo: "https://drive.google.com/thumbnail?id=1GODX_KsG2TfJYHIlzZ3f9NlYHrVpEk9Q&sz=w500",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "https://drive.google.com/thumbnail?id=1GRq9enu75faHIaDHIa5uBNjqGkUVi-6X&sz=w500",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "https://drive.google.com/thumbnail?id=1P9ObhkHyVCwT_3lHg1wpbi-U35xZZhUj&sz=w500",
  },
]

export function ClientsMarquee() {
  return (
    <section className="py-12 bg-white border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Clients
        </h2>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {/* First set of logos */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={`${client.id}-${index}`} className="mx-8 flex items-center justify-center w-48 h-24">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap items-center">
          {/* Second set of logos for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={`duplicate-${client.id}-${index}`} className="mx-8 flex items-center justify-center w-48 h-24">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
