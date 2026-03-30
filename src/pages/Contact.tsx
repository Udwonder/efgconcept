import { MapPin, Phone, Mail, Globe, Handshake, TrendingUp, CheckCircle } from "lucide-react"

export default function Contact() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://drive.google.com/thumbnail?id=1Ptofgwh4GGIfzVzsVEecU_4IY061knL-&sz=w1920"
            alt="Partnership and Contact"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Bridging Global Capital and Local Development Needs.
            </h1>
            <p className="mt-6 text-lg leading-8 text-black font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Partner with us to unlock value and drive sustainable growth across critical sectors.
            </p>
          </div>
        </div>
      </section>

      {/* PPP Models & Why Choose Us */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* PPP Models */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="rounded-lg bg-[hsl(var(--primary))]/10 p-3">
                  <Handshake className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">PPP Models</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                We utilize Core Models (BOT, BOOT, BOO), Integrated Models (DBFO, DBFOM), and Supporting Structures like Joint Ventures and Leasing.
              </p>
              
              <div className="w-full">
                <table className="w-full text-left border-collapse block sm:table">
                  <thead className="block sm:table-header-group hidden sm:table-header-group">
                    <tr className="border-b border-border block sm:table-row absolute -top-96 -left-96 sm:relative sm:top-auto sm:left-auto">
                      <th className="py-4 px-4 font-semibold text-foreground block sm:table-cell">Model Category</th>
                      <th className="py-4 px-4 font-semibold text-foreground block sm:table-cell">Specific Structures</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border block sm:table-row-group">
                    <tr className="hover:bg-muted/50 transition-colors block sm:table-row border-b sm:border-none mb-4 sm:mb-0">
                      <td className="py-2 px-4 text-muted-foreground font-medium block sm:table-cell before:content-['Model_Category:'] before:font-semibold before:mr-2 sm:before:content-none">Core Models</td>
                      <td className="py-2 px-4 text-muted-foreground block sm:table-cell before:content-['Specific_Structures:'] before:font-semibold before:mr-2 sm:before:content-none">BOT, BOOT, BOO</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors block sm:table-row border-b sm:border-none mb-4 sm:mb-0">
                      <td className="py-2 px-4 text-muted-foreground font-medium block sm:table-cell before:content-['Model_Category:'] before:font-semibold before:mr-2 sm:before:content-none">Integrated Models</td>
                      <td className="py-2 px-4 text-muted-foreground block sm:table-cell before:content-['Specific_Structures:'] before:font-semibold before:mr-2 sm:before:content-none">DBFO, DBFOM</td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors block sm:table-row border-b sm:border-none mb-4 sm:mb-0">
                      <td className="py-2 px-4 text-muted-foreground font-medium block sm:table-cell before:content-['Model_Category:'] before:font-semibold before:mr-2 sm:before:content-none">Supporting Structures</td>
                      <td className="py-2 px-4 text-muted-foreground block sm:table-cell before:content-['Specific_Structures:'] before:font-semibold before:mr-2 sm:before:content-none">Joint Ventures, Leasing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="rounded-lg bg-[hsl(var(--secondary))]/10 p-3">
                  <TrendingUp className="h-6 w-6 text-[hsl(var(--secondary))]" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Why Choose E & F General Concepts Limited?</h2>
              </div>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Choosing the right partner is critical to project success. E & F General Concepts Limited offers a compelling value proposition:
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong className="text-foreground font-semibold">Diversified Expertise:</strong> A broad portfolio of services eliminates the need for multiple contractors.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong className="text-foreground font-semibold">Financial Strength:</strong> Strong linkages with capital providers ensure projects are adequately funded.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong className="text-foreground font-semibold">Execution Track Record:</strong> A results-driven approach backed by experienced professionals.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong className="text-foreground font-semibold">Local Knowledge, Global Standards:</strong> We combine deep understanding of the Nigerian operating environment with adherence to international quality benchmarks.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--primary))] shrink-0" />
                  <span className="text-lg text-muted-foreground"><strong className="text-foreground font-semibold">Commitment to Partnership:</strong> We view our clients as long-term partners, invested in their success beyond the life of a single project.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">Reach out to us to discuss potential partnerships and projects.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-background border rounded-2xl p-8 shadow-sm text-center flex flex-col items-center">
              <MapPin className="h-8 w-8 text-[hsl(var(--primary))] mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground">No. 10 String Road, Ikot Ekpo, Cross River State, Nigeria.</p>
            </div>
            <div className="bg-background border rounded-2xl p-8 shadow-sm text-center flex flex-col items-center">
              <Phone className="h-8 w-8 text-[hsl(var(--secondary))] mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Direct</h3>
              <p className="text-muted-foreground">08105651222<br/>07036948408</p>
            </div>
            <div className="bg-background border rounded-2xl p-8 shadow-sm text-center flex flex-col items-center">
              <Mail className="h-8 w-8 text-[hsl(var(--primary))] mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:Efgeneralconcept@gmail.com" className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors">
                Efgeneralconcept@gmail.com
              </a>
            </div>
            <div className="bg-background border rounded-2xl p-8 shadow-sm text-center flex flex-col items-center">
              <Globe className="h-8 w-8 text-[hsl(var(--secondary))] mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Web</h3>
              <a href="https://www.efgconcept.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">
                www.efgconcept.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
