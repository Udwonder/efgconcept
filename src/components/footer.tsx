import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img 
              src="https://drive.google.com/thumbnail?id=10pdQx6oEynnRKuxKy24AGjsIO4RFLOu0&sz=w1000" 
              alt="E & F General Concepts Limited Logo" 
              className="h-16 w-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm leading-6 text-muted-foreground">
              A dynamic Nigerian partner for infrastructure, industrial development, and strategic investments.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/growth" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Strategic Growth
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                      Partnership & Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-x-3 text-sm leading-6 text-muted-foreground">
                    <MapPin className="h-5 w-5 flex-none text-[hsl(var(--primary))]" aria-hidden="true" />
                    <span>No. 10 String Road, Ikot Ekpo, Cross River State, Nigeria.</span>
                  </li>
                  <li className="flex items-center gap-x-3 text-sm leading-6 text-muted-foreground">
                    <Phone className="h-5 w-5 flex-none text-[hsl(var(--primary))]" aria-hidden="true" />
                    <span>
                      <a href="tel:+2348105651222" className="hover:text-foreground transition-colors">08105651222</a>,{' '}
                      <a href="tel:+2347036948408" className="hover:text-foreground transition-colors">07036948408</a>
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3 text-sm leading-6 text-muted-foreground">
                    <Mail className="h-5 w-5 flex-none text-[hsl(var(--primary))]" aria-hidden="true" />
                    <a href="mailto:Efgeneralconcept@gmail.com" className="hover:text-foreground transition-colors">
                      Efgeneralconcept@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3 text-sm leading-6 text-muted-foreground">
                    <Globe className="h-5 w-5 flex-none text-[hsl(var(--primary))]" aria-hidden="true" />
                    <a href="https://www.efgconcept.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                      www.efgconcept.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24 flex justify-center items-center">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            Built with ❤️ by <a href="https://www.scaleupfoundation.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--primary))] transition-colors underline underline-offset-2">Scaleup Foundation</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
