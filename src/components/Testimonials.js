const Testimonials = () => {
  const testimonials = [
    {
      name: "Saul Goodman",
      position: "Ceo & Founder",
      image: "/img/testimonials/testimonials-1.jpg",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      rating: 5,
    },
    {
      name: "Sara Wilsson",
      position: "Designer",
      image: "/img/testimonials/testimonials-2.jpg",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      rating: 5,
    },
    {
      name: "Jena Karlis",
      position: "Store Owner",
      image: "/img/testimonials/testimonials-3.jpg",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      rating: 5,
    },
    {
      name: "Matt Brandon",
      position: "Freelancer",
      image: "/img/testimonials/testimonials-4.jpg",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      rating: 5,
    },
    {
      name: "John Larson",
      position: "Entrepreneur",
      image: "/img/testimonials/testimonials-5.jpg",
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="testimonial-item">
                <img src={testimonial.image || "/placeholder.svg"} className="testimonial-img" alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
