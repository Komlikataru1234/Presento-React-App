
import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header id="header" className={`header d-flex align-items-center sticky-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a
          href="#hero"
          className="logo d-flex align-items-center me-auto"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("hero")
          }}
        >
          <h1 className="sitename">Presento</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul className={isMobileMenuOpen ? "d-block" : ""}>
            <li>
              <a
                href="#hero"
                className="active"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("hero")
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("services")
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("portfolio")
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("team")
                }}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          ></i>
        </nav>

        <a
          className="btn-getstarted"
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("about")
          }}
        >
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Header
