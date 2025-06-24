
const Services = () => {
  const services = [
    {
      icon: "bi bi-briefcase",
      title: "Lorem Ipsum",
      description:
        "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: "bi bi-card-checklist",
      title: "Dolor Sitema",
      description:
        "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: "bi bi-bar-chart",
      title: "Sed ut perspiciatis",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icon: "bi bi-binoculars",
      title: "Magni Dolores",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      icon: "bi bi-brightness-high",
      title: "Nemo Enim",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      icon: "bi bi-calendar4-week",
      title: "Eiusmod Tempor",
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    },
  ]

  const handleServiceClick = (service) => {
    
    console.log(`${service.title} service clicked`)
    
  }

  return (
    <section id="services" className="services section section-bg dark-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="service-item d-flex position-relative h-100">
                <i className={`${service.icon} icon flex-shrink-0`}></i>
                <div>
                  <h4 className="title">
                    <button
                      type="button"
                      className="stretched-link"
                      onClick={() => handleServiceClick(service)}
                      aria-label={`Learn more about ${service.title}`}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        color: "inherit",
                        font: "inherit",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      {service.title}
                    </button>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
