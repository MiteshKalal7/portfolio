import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
})
function Testinomial() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1500,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  }
  const options2 = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  }
  return (
    <section className="testinomial-section bg-none pad-tb">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>OUR HAPPY CUSTOMERS</span>
              <h2>Customer Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <OwlCarousel className="video-testimonials" {...options}>
              <div
                className="video-review"
                data-tilt
                data-tilt-max={5}
                data-tilt-speed={1000}
              >
                <a
                  className="video-link"
                  href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0"
                >
                  <img
                    src="/images/client/client-pic.jpg"
                    alt="client"
                    className="img-fluid"
                  />
                  <div className="review-vid-details">
                    <div className="-vid-ico">
                      <span className="triangle-play2" />
                    </div>
                    <p>Cina Cleaves</p>
                  </div>
                </a>
              </div>
              <div
                className="video-review"
                data-tilt
                data-tilt-max={5}
                data-tilt-speed={1000}
              >
                <a
                  className="video-link"
                  href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0"
                >
                  <img
                    src="/images/client/client-pic-a.jpg"
                    alt="client"
                    className="img-fluid"
                  />
                  <div className="review-vid-details">
                    <div className="-vid-ico">
                      <span className="triangle-play2" />
                    </div>
                    <p>Jokvch Marlin</p>
                  </div>
                </a>
              </div>
            </OwlCarousel>
          </div>
          <div className="col-lg-6">
            <OwlCarousel className="testimonial-card-a pl25" {...options2}>
              <div className="testimonial-card">
                <div className="t-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="client-thumbs mt30">
                  <div className="media v-center">
                    <div className="user-image bdr-radius">
                      <img
                        src="/images/user-thumb/girl.jpg"
                        alt="girl"
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-body user-info v-center">
                      <h5>Mike Smith</h5>
                      <p>
                        Business Owner, <small>Sydney, Australia</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="t-text">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="client-thumbs mt30">
                  <div className="media v-center">
                    <div className="user-image bdr-radius">
                      <img
                        src="/images/user-thumb/girl.jpg"
                        alt="girl"
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-body user-info">
                      <h5>Fred Chener</h5>
                      <p>
                        CEO of Aramxx, <small>Ohio, US State</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="t-text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <div className="client-thumbs mt30">
                  <div className="media v-center">
                    <div className="user-image bdr-radius">
                      <img
                        src="/images/user-thumb/girl.jpg"
                        alt="girl"
                        className="img-fluid"
                      />
                    </div>
                    <div className="media-body user-info">
                      <h5>Mathilda Burns</h5>
                      <p>
                        Backery Shop, <small>Tronto, Italy</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="review-ref mt100">
              <div className="review-title-ref">
                <h4>Read More Reviews</h4>
                <p>Read our reviews from all over world.</p>
              </div>
              <div className="review-icons">
                <a
                  href="#"
                  target="blank"
                  className="wow fadeIn"
                  data-wow-delay=".2s"
                >
                  <img
                    src="/images/about/reviews-icon-1.png"
                    alt="review"
                    className="img-fluid"
                  />
                </a>
                <a
                  href="#"
                  target="blank"
                  className="wow fadeIn"
                  data-wow-delay=".4s"
                >
                  <img
                    src="/images/about/reviews-icon-2.png"
                    alt="review"
                    className="img-fluid"
                  />
                </a>
                <a
                  href="#"
                  target="blank"
                  className="wow fadeIn"
                  data-wow-delay=".6s"
                >
                  <img
                    src="/images/about/reviews-icon-3.png"
                    alt="review"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testinomial
