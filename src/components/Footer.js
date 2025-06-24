
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert("Newsletter subscription successful!")
    setEmail("")
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSocialClick = (platform) => {
    console.log(`${platform} social link clicked`)
  }

  const handleServiceClick = (service) => {
    console.log(`${service} service clicked`)
  }

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <button
              type="button"
              className="logo d-flex align-items-center"
              onClick={() => scrollToSection("hero")}
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <span className="sitename">Presento</span>
            </button>
            <div className="footer-contact pt-3">
              <p>Pune</p>
              <p>Maharashtra</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 1234567890</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <button type="button" onClick={() => handleSocialClick("Twitter")} aria-label="Follow us on Twitter">
                <i className="bi bi-twitter-x"></i>
              </button>
              <button type="button" onClick={() => handleSocialClick("Facebook")} aria-label="Follow us on Facebook">
                <i className="bi bi-facebook"></i>
              </button>
              <button type="button" onClick={() => handleSocialClick("Instagram")} aria-label="Follow us on Instagram">
                <i className="bi bi-instagram"></i>
              </button>
              <button type="button" onClick={() => handleSocialClick("LinkedIn")} aria-label="Follow us on LinkedIn">
                <i className="bi bi-linkedin"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("hero")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("about")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => console.log("Terms of service clicked")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Terms of service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => console.log("Privacy policy clicked")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Privacy policy
                </button>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick("Web Design")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Web Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick("Web Development")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick("Product Management")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Product Management
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick("Marketing")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Marketing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleServiceClick("Graphic Design")}
                  style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
                >
                  Graphic Design
                </button>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form onSubmit={handleNewsletterSubmit} className="php-email-form">
              <div className="newsletter-form">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                />
                <input type="submit" value="Subscribe" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Presento</strong><span>All Rights Reserved</span>
        </p>
        
      </div>
    </footer>
  )
}

export default Footer
