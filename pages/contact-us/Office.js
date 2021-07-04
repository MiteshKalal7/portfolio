function Office() {
  return (
    <section className="contact-location pad-tb bglight">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our Locations</span>
              <h2>Our office</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center upset shape-numm">
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="office-card">
              <div className="skyline-img">
                <img
                  src="images/location/newyork.png"
                  alt="New York"
                  className="img-fluid"
                />
              </div>
              <div className="office-text">
                <h4>Ahmedabad</h4>
                <p>Satellite, Ahmedabad, India</p>
                <a
                  href="javascript:void(0)"
                  target="blank"
                  className="btn-outline"
                >
                  View on Map <i className="fas fa-chevron-right fa-icon" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="office-card">
              <div className="skyline-img">
                <img
                  src="images/location/sydeny.png"
                  alt="sydney"
                  className="img-fluid"
                />
              </div>
              <div className="office-text">
                <h4>Vadodara</h4>
                <p>Satellite, Vadodara, India</p>
                <a
                  href="javascript:void(0)"
                  target="blank"
                  className="btn-outline"
                >
                  View on Map <i className="fas fa-chevron-right fa-icon" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="office-card mb0">
              <div className="skyline-img">
                <img
                  src="images/location/rome.png"
                  alt="rome"
                  className="img-fluid"
                />
              </div>
              <div className="office-text">
                <h4>Canada</h4>
                <p>Kitchener, Canada</p>
                <a
                  href="javascript:void(0)"
                  target="blank"
                  className="btn-outline"
                >
                  View on Map <i className="fas fa-chevron-right fa-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Office
