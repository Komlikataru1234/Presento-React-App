
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="hero section">
      <img src="/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Better digital experience with Presento
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
              <a
                href="#about"
                className="btn-get-started"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                Get Started
              </a>
              <a
                href="https://www.youtube.com"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
