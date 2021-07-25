// import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <section className="portfolio-section pad-tb">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our Work</span>
              <h2 className="mb0">Our Latest Creative Work</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-8 col-sm-8 mt60 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <a href="#">
                  <img
                    src="images/portfolio/image-d.jpg"
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
          <div
            className="col-lg-4 col-sm-4 mt60 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <a href="#">
                  <img
                    src="images/portfolio/image-1.jpg"
                    alt="image"
                    className="img-fluid"
                  />{' '}
                </a>
              </div>
              <div className="item-info">
                <h4>
                  <a href="#">Creative App</a>
                </h4>
                <p>iOs, Android</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-4 mt60 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <a href="#">
                  <img
                    src="images/portfolio/image-6.jpg"
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
          <div
            className="col-lg-8 col-sm-8 mt60 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <div className="isotope_item hover-scale">
              <div
                className="item-image"
                data-tilt
                data-tilt-max="2"
                data-tilt-speed="1000"
              >
                <a href="#">
                  <img
                    src="images/portfolio/image-c.jpg"
                    alt="image"
                    className="img-fluid"
                  />{' '}
                </a>
              </div>
              <div className="item-info">
                <h4>
                  <a href="#">Icon Pack</a>
                </h4>
                <p>iOs, Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
