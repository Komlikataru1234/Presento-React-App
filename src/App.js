import Header from "./components/Header"
import Hero from "./components/Hero"
import Clients from "./components/Clients"
import About from "./components/About"
import Stats from "./components/Stats"
import Tabs from "./components/Tabs"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import "./assets/styles/main.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Clients />
        <About />
        <Stats />
        <Tabs />
        <Services />
        <Portfolio />
        <Testimonials />
        
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
