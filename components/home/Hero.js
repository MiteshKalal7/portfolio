import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel'), {
  ssr: false,
})
function Hero() {
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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  }
  return (
    <section className="hero-card-web bg-gradient12 shape-bg3">
      <div className="hero-main-rp container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="hero-heading-sec">
              <h2 className="wow fadeIn" data-wow-delay="0.3s">
                <span>Web.</span> <span>Mobile.</span> <span>Graphic.</span>
                <span>Marketing.</span>
              </h2>
              <p className="wow fadeIn" data-wow-delay="0.6s">
                Website and App development solution for transforming and
                innovating businesses.
              </p>
              <a
                href="case-study.html"
                className="btn-main bg-btn lnk wow fadeIn"
                data-wow-delay="0.8s"
              >
                View Case Studies
                <i className="fas fa-chevron-right fa-ani" />
                <span className="circle" />
              </a>
              <div className="awards-block-tt  wow fadeIn" data-wow-delay="1s">
                <img
                  src="images/hero/awards-logo.png"
                  alt="awards-logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-content-sec wow fadeIn" data-wow-delay="0.8s">
              <div className="video-intro-pp">
                <a
                  className="video-link play-video"
                  href="https://www.youtube.com/watch?v=SZEflIVnhH8?autoplay=1&rel=0"
                >
                  <span className="triangle-play" />
                </a>
              </div>
              <div className="title-hero-oth">
                <p>
                  We design digital solutions
                  <span>for brands and companies</span>
                </p>
              </div>
            </div>

            <div className="hero-right-scmm">
              <div
                className="hero-service-cards wow fadeInRight"
                data-wow-duration="2s"
              >
                <OwlCarousel className="service-card-prb" {...options}>
                  <div
                    className="service-slide card-bg-a"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a href="#">
                      <div className="service-card-hh">
                        <div className="image-sr-mm">
                          <img alt="custom-sport" src="images/service/vr.png" />
                        </div>
                        <div className="title-serv-c">
                          <span>VR</span>
                          Solution
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="service-slide card-bg-b"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a href="#">
                      <div className="service-card-hh">
                        <div className="image-sr-mm">
                          <img
                            alt="custom-sport"
                            src="images/service/app-develop.png"
                          />
                        </div>
                        <div className="title-serv-c">
                          <span>Custom</span>
                          App Solution
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="service-slide card-bg-c"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a href="#">
                      <div className="service-card-hh">
                        <div className="image-sr-mm">
                          <img
                            alt="custom-sport"
                            src="images/service/startup.png"
                          />
                        </div>
                        <div className="title-serv-c">
                          <span>Startup</span>
                          Solution
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="service-slide card-bg-d"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a href="#">
                      <div className="service-card-hh">
                        <div className="image-sr-mm">
                          <img
                            alt="custom-sport"
                            src="images/service/car-rental.png"
                          />
                        </div>
                        <div className="title-serv-c">
                          <span>Car</span>
                          Rental Solution
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="service-slide card-bg-e"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a href="#">
                      <div className="service-card-hh">
                        <div className="image-sr-mm">
                          <img
                            alt="custom-sport"
                            src="images/service/marketing.png"
                          />
                        </div>
                        <div className="title-serv-c">
                          <span>Marketing</span>
                          Solution
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="service-slide card-bg-f"
                    data-tilt
                    data-tilt-max="5"
                    data-tilt-speed="1000"
                  >
                    <a href="#">
                      <div className="service-card-hh">
                        <div className="image-sr-mm">
                          <img
                            alt="custom-sport"
                            src="images/service/ewallet.png"
                          />
                        </div>
                        <div className="title-serv-c">
                          <span>e-Wallet</span>
                          Solution
                        </div>
                      </div>
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
