import { Outlet } from "react-router-dom"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { ClientsMarquee } from "./clients-marquee"

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <ClientsMarquee />
      <Footer />
    </div>
  )
}
