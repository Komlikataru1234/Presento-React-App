
import { useState } from "react"

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*")

  const portfolioItems = [
    {
      id: 1,
      category: "app",
      title: "App 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/app-1.jpg",
    },
    {
      id: 2,
      category: "product",
      title: "Product 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/product-1.jpg",
    },
    {
      id: 3,
      category: "branding",
      title: "Branding 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/branding-1.jpg",
    },
    {
      id: 4,
      category: "books",
      title: "Books 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/books-1.jpg",
    },
    {
      id: 5,
      category: "app",
      title: "App 2",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/app-2.jpg",
    },
    {
      id: 6,
      category: "product",
      title: "Product 2",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/product-2.jpg",
    },
    {
      id: 7,
      category: "branding",
      title: "Branding 2",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/branding-2.jpg",
    },
    {
      id: 8,
      category: "books",
      title: "Books 2",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/books-2.jpg",
    },
    {
      id: 9,
      category: "app",
      title: "App 3",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/app-3.jpg",
    },
    {
      id: 10,
      category: "product",
      title: "Product 3",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/product-3.jpg",
    },
    {
      id: 11,
      category: "books",
      title: "Books 3",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/books-3.jpg",
    },
    {
      id: 12,
      category: "branding",
      title: "Branding 2",
      description: "Lorem ipsum, dolor sit amet consectetur",
      image: "/img/portfolio/branding-3.jpg",
    },
  ]

  const filters = [
    { key: "*", label: "All" },
    { key: "app", label: "App" },
    { key: "product", label: "Product" },
    { key: "branding", label: "Branding" },
    { key: "books", label: "Books" },
  ]

  const filteredItems =
    activeFilter === "*" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const handleImagePreview = (item) => {
    
    window.open(item.image, "_blank")
  }

  const handleDetailsClick = (item) => {
  
    console.log(`View details for ${item.title}`)
  }

  const handleKeyDown = (event, filterKey) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setActiveFilter(filterKey)
    }
  }

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="isotope-layout">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100" role="tablist">
            {filters.map((filter) => (
              <li
                key={filter.key}
                className={activeFilter === filter.key ? "filter-active" : ""}
                onClick={() => setActiveFilter(filter.key)}
                onKeyDown={(e) => handleKeyDown(e, filter.key)}
                tabIndex={0}
                role="tab"
                aria-selected={activeFilter === filter.key}
                aria-label={`Filter by ${filter.label}`}
                style={{ cursor: "pointer" }}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-content h-100">
                  <img src={item.image || "/placeholder.svg"} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button
                      type="button"
                      title={`Preview ${item.title}`}
                      className="glightbox preview-link"
                      onClick={() => handleImagePreview(item)}
                      aria-label={`Preview image of ${item.title}`}
                    >
                      <i className="bi bi-zoom-in"></i>
                    </button>
                    <button
                      type="button"
                      title="More Details"
                      className="details-link"
                      onClick={() => handleDetailsClick(item)}
                      aria-label={`View more details about ${item.title}`}
                    >
                      <i className="bi bi-link-45deg"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
