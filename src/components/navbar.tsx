import { Link, useLocation } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { cn } from "../lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Strategic Growth", href: "/growth" },
  { name: "Partnership & Contact", href: "/contact" },
]

export function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between p-4 md:p-6 lg:px-8 gap-4" aria-label="Global">
        <div className="flex w-full md:w-auto md:flex-1 justify-between items-center">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">E & F General Concepts Limited</span>
            <img 
              src="https://drive.google.com/thumbnail?id=10pdQx6oEynnRKuxKy24AGjsIO4RFLOu0&sz=w1000" 
              alt="E & F General Concepts Limited Logo" 
              className="h-10 md:h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          <div className="flex md:hidden gap-2 items-center">
            <ModeToggle />
            <Link
              to="/contact"
              className="rounded-md bg-[hsl(var(--primary))] px-3 py-2 text-xs font-semibold text-white shadow-sm"
            >
              Partner
            </Link>
          </div>
        </div>
        
        <div className="flex overflow-x-auto w-full md:w-auto gap-x-6 pb-2 md:pb-0 items-center justify-start md:justify-center [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-[hsl(var(--primary))] whitespace-nowrap",
                location.pathname === item.href ? "text-[hsl(var(--primary))]" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:flex-1 md:justify-end md:gap-4 md:items-center">
          <ModeToggle />
          <Link
            to="/contact"
            className="rounded-md bg-[hsl(var(--primary))] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[hsl(var(--primary))]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[hsl(var(--primary))]"
          >
            Partner With Us
          </Link>
        </div>
      </nav>
    </header>
  )
}
