
import { useState, useEffect } from "react"

const Stats = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    support: 0,
    workers: 0,
  })

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const finalValues = {
    clients: 232,
    projects: 521,
    support: 1463,
    workers: 15,
  }

  useEffect(() => {
    const duration = 2000 
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalValues).map((key) => {
      const increment = finalValues[key] / steps
      let currentValue = 0

      return setInterval(() => {
        currentValue += increment
        if (currentValue >= finalValues[key]) {
          currentValue = finalValues[key]
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(currentValue) }))
      }, stepDuration)
    })

    
    const cleanup = setTimeout(() => {
      intervals.forEach((interval) => clearInterval(interval))
    }, duration + 100)

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
      clearTimeout(cleanup)
    }
  }, [finalValues, finalValues.clients, finalValues.projects, finalValues.support, finalValues.workers])

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-emoji-smile"></i>
            <div className="stats-item">
              <span className="purecounter">{counters.clients}</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-journal-richtext"></i>
            <div className="stats-item">
              <span className="purecounter">{counters.projects}</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-headset"></i>
            <div className="stats-item">
              <span className="purecounter">{counters.support}</span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-people"></i>
            <div className="stats-item">
              <span className="purecounter">{counters.workers}</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
