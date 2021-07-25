function Location() {
  return (
    <section className="our-office pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Our Locations</span>
              <h2>Our Office</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeIn"
            data-wow-delay=".2s"
          >
            <div className="office-card hoshd">
              <div className="landscp">
                <img
                  src="/images/location/india-img.png"
                  alt="location"
                  className="img-fluid"
                />
              </div>
              <div className="info-text-div">
                <h4>India</h4>
                <h6 className="mt10">Registered Office</h6>
                <p>
                  232, 21st East Street, Kamaraj Nagar, Jaipur, Rajasthan 303030
                </p>
                <ul className="-address-list mt10">
                  <li>
                    <a href="mailto:info@businessname.com">
                      <i className="fas fa-envelope" /> info@businessname.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+10000000000">
                      <i className="fas fa-phone-alt" /> +1 0000 000 000
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeIn"
            data-wow-delay=".4s"
          >
            <div className="office-card hoshd">
              <div className="landscp">
                <img
                  src="/images/location/italy.png"
                  alt="location"
                  className="img-fluid"
                />
              </div>
              <div className="info-text-div">
                <h4>Italy</h4>
                <h6 className="mt10">Registered Office</h6>
                <p>9988 Piazzetta Scalette Rubiani 99, Rome, 84090</p>
                <ul className="-address-list mt10">
                  <li>
                    <a href="mailto:info@businessname.com">
                      <i className="fas fa-envelope" /> info@businessname.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+10000000000">
                      <i className="fas fa-phone-alt" /> +1 0000 000 000
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6 shape-loc wow fadeIn"
            data-wow-delay=".6s"
          >
            <div className="office-card hoshd">
              <div className="landscp">
                <img
                  src="/images/location/paris.png"
                  alt="location"
                  className="img-fluid"
                />
              </div>
              <div className="info-text-div">
                <h4>Paris</h4>
                <h6 className="mt10">Registered Office</h6>
                <p>603 FA Forest Avenue, New York, USA 10021</p>
                <ul className="-address-list mt10">
                  <li>
                    <a href="mailto:info@businessname.com">
                      <i className="fas fa-envelope" /> info@businessname.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+10000000000">
                      <i className="fas fa-phone-alt" /> +1 0000 000 000
                    </a>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
