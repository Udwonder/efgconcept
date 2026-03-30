import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { Layout } from "./components/layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import StrategicGrowth from "./pages/StrategicGrowth"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ef-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="growth" element={<StrategicGrowth />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
