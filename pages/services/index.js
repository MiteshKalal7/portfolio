import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Link from 'next/link'

// import Contact from './Contact'
// import Office from './Office'

function Dashboard() {
  return (
    <>
      {/* <Header /> */}
      <Hero page="Services" title="Our Services" />
      <section className="element-page pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading">
                <h2 className="mb30">Design 1</h2>
              </div>
            </div>
          </div>
          <div className="row upset ovr-bg2 bd-hor">
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor bd-hor-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/branding.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Social Media Marketing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="javascript:void(0)">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="s-block up-hor bd-hor-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/development.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Branding &amp; Identity</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="javascript:void(0)">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="s-block up-hor bd-hor-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/app.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Performance Marketing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="javascript:void(0)">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt100">
            <div className="col-lg-6">
              <div className="common-heading">
                <h2 className="mb30">Design 2</h2>
              </div>
            </div>
          </div>
          <div className="row upset ovr-bg1 ho-gdnt">
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor ovr-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/branding.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Social Media Marketing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="javascript:void(0)">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="s-block up-hor ovr-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/development.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Branding &amp; Identity</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="javascript:void(0)">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="s-block up-hor ovr-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/app.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Performance Marketing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="javascript:void(0)">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt100">
            <div className="col-lg-6">
              <div className="common-heading">
                <h2 className="mb0">Design 3</h2>
              </div>
            </div>
          </div>
          <div className="row card-list">
            <div className="col-lg-4 col-md-6 grid-sizer" />
            <div className="col-lg-4 col-sm-6 single-card-item app">
              <div className="isotope_item hover-scale">
                <div className="item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/image-1.jpg"
                      alt="portfolio"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Creative App</a>
                  </h4>
                  <p>ios, design</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 single-card-item graphic">
              <div className="isotope_item hover-scale">
                <div className="item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/image-2.jpg"
                      alt="image"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Brochure Design</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 single-card-item website">
              <div className="isotope_item hover-scale">
                <div className="item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/image-3.jpg"
                      alt="image"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
                <div className="item-info">
                  <h4>
                    <a href="#">Ecommerce Development</a>
                  </h4>
                  <p>Web Application</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt100">
            <div className="col-lg-6">
              <div className="common-heading">
                <h2 className="mb30">Design 4</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-sm-4 mt40 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="isotope_item up-hor">
                <div className="item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/app-img1.jpg"
                      alt="image"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
                <div className="item-info-div shdo">
                  <h4>
                    <a href="#">Pets Care &amp; Training App</a>
                  </h4>
                  <p>iOs, Android</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 mt40 wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="isotope_item up-hor">
                <div className="item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/app-img2.jpg"
                      alt="image"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
                <div className="item-info-div shdo">
                  <h4>
                    <a href="#">Car Rental App</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 mt40 wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="isotope_item up-hor">
                <div className="item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/app-img3.jpg"
                      alt="image"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
                <div className="item-info-div shdo">
                  <h4>
                    <a href="#">Event Management App</a>
                  </h4>
                  <p>Graphic, Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Dashboard
