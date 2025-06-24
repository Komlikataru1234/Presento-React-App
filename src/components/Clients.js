
import { useState, useEffect, useRef } from "react"

const Clients = () => {
  const [isScrolling, setIsScrolling] = useState(true)
  const scrollContainerRef = useRef(null)

  const clients = [
    "/img/clients/client-1.png",
    "/img/clients/client-2.png",
    "/img/clients/client-3.png",
    "/img/clients/client-4.png",
    "/img/clients/client-5.png",
    "/img/clients/client-6.png",
    "/img/clients/client-7.png",
    "/img/clients/client-8.png",
  ]

  
  const duplicatedClients = [...clients, ...clients, ...clients]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || !isScrolling) return

    let scrollPosition = 0
    const scrollSpeed = 1 
    const maxScroll = container.scrollWidth / 3 

    const scroll = () => {
      if (!isScrolling) return

      scrollPosition += scrollSpeed
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }

      container.scrollLeft = scrollPosition

      requestAnimationFrame(scroll)
    }

    const animationFrame = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isScrolling])

  const handleMouseEnter = () => {
    setIsScrolling(false)
  }

  const handleMouseLeave = () => {
    setIsScrolling(true)
  }

  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="clients-slider-wrapper">
          <div
            className="clients-slider"
            ref={scrollContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedClients.map((client, index) => (
              <div key={index} className="client-item">
                <img 
                  src={client || "/placeholder.svg"} 
                  className="img-fluid" 
                  alt={`Client ${(index % clients.length) + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
