const Team = () => {
  const teamMembers = [
    {
      name: "Walter White",
      position: "Chief Executive Officer",
      image: "/img/team/team-1.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Johnson",
      position: "Product Manager",
      image: "/img/team/team-2.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "William Anderson",
      position: "CTO",
      image: "/img/team/team-3.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Amanda Jepson",
      position: "Accountant",
      image: "/img/team/team-4.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <section id="team" className="team section section-bg dark-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="team-member">
                <div className="member-img">
                  <img src={member.image || "/placeholder.svg"} className="img-fluid" alt={member.name} />
                  <div className="social">
                    <a href={member.social.twitter}>
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href={member.social.facebook}>
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href={member.social.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={member.social.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
