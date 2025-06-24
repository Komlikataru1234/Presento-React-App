
import { useState } from "react"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab-1")

  const tabs = [
    {
      id: "tab-1",
      icon: "bi bi-binoculars",
      title: "Modi sit est dela pireda nest",
      heading: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/img/working-1.jpg",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
      ],
    },
    {
      id: "tab-2",
      icon: "bi bi-box-seam",
      title: "Unde praesenti mara setra le",
      heading: "Neque exercitationem debitis soluta quos debitis quo mollitia officia est",
      content:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/img/working-2.jpg",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
      ],
    },
    {
      id: "tab-3",
      icon: "bi bi-brightness-high",
      title: "Pariatur explica nitro dela",
      heading: "Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda",
      content:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/img/working-3.jpg",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.",
      ],
    },
    {
      id: "tab-4",
      icon: "bi bi-command",
      title: "Nostrum qui dile node",
      heading: "Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum",
      content:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/img/working-4.jpg",
      features: [
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit.",
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
      ],
    },
  ]


  return (
    <section id="tabs" className="tabs section">
      <div className="container">
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100" role="tablist">
          {tabs.map((tab, index) => (
            <li key={tab.id} className="nav-item col-3">
              <button
                type="button"
                className={`nav-link ${activeTab === tab.id ? "active show" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                aria-selected={activeTab === tab.id}
                role="tab"
                aria-controls={`${tab.id}-panel`}
              >
                <i className={tab.icon}></i>
                <h4 className="d-none d-lg-block">{tab.title}</h4>
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? "active show" : ""}`}
              id={`${tab.id}-panel`}
              role="tabpanel"
              aria-labelledby={tab.id}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{tab.heading}</h3>
                  <p className="fst-italic">{tab.content}</p>
                  <ul>
                    {tab.features.map((feature, index) => (
                      <li key={index}>
                        <i className="bi bi-check2-all"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src={tab.image || "/placeholder.svg"} alt={tab.heading} className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tabs
