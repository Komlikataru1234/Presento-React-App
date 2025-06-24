
const About = () => {
  const handleAboutClick = () => {
    
    console.log("About us clicked")
  }

  const handleFeatureClick = (featureName) => {
    console.log(`${featureName} feature clicked`)
  }

  return (
    <section id="about" className="about section section-bg dark-background">
      <div className="container position-relative">
        <div className="row gy-5">
          <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <button
              type="button"
              className="about-btn align-self-center align-self-xl-start"
              onClick={handleAboutClick}
            >
              <span>About us</span> <i className="bi bi-chevron-right"></i>
            </button>
          </div>

          <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <button
                    type="button"
                    className="stretched-link"
                    onClick={() => handleFeatureClick("Corporis voluptates sit")}
                  >
                    Corporis voluptates sit
                  </button>
                </h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-gem"></i>
                <h4>
                  <button
                    type="button"
                    className="stretched-link"
                    onClick={() => handleFeatureClick("Ullamco laboris nisi")}
                  >
                    Ullamco laboris nisi
                  </button>
                </h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-broadcast"></i>
                <h4>
                  <button
                    type="button"
                    className="stretched-link"
                    onClick={() => handleFeatureClick("Labore consequatur")}
                  >
                    Labore consequatur
                  </button>
                </h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-easel"></i>
                <h4>
                  <button
                    type="button"
                    className="stretched-link"
                    onClick={() => handleFeatureClick("Beatae veritatis")}
                  >
                    Beatae veritatis
                  </button>
                </h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
