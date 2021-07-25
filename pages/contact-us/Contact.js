function Contact() {
  return (
    <section className="contact-page pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 contact2dv">
            <div className="info-wrapr">
              <h3 className="mb-4">Contact us</h3>
              <div className="dbox d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fas fa-map-marker" />
                </div>
                <div className="text pl-4">
                  <p>
                    <span>Address:</span>123 Business Centre London SW1A 1AA
                  </p>
                </div>
              </div>
              <div className="dbox d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="text pl-4">
                  <p>
                    <span>Phone:</span>{' '}
                    <a href="tel://1234567920">+ 123 5647 89</a>
                  </p>
                </div>
              </div>
              <div className="dbox d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fas fa-envelope" />
                </div>
                <div className="text pl-4">
                  <p>
                    <span>Email:</span>{' '}
                    <a href="mailto:info@niwax.com">info@niwax.com</a>
                  </p>
                </div>
              </div>
              <div className="dbox d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <i className="fa fa-globe" />
                </div>
                <div className="text pl-4">
                  <p>
                    <span>Website</span> <a href="#">www.niwax.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-mt30 pr30 pl30">
            <div className="common-heading text-l">
              <h2 className="mt0 mb0">Get in touch</h2>
              <p className="mb60 mt10">
                We will catch you as early as we receive the message
              </p>
            </div>
            <div className="form-block">
              <form id="contactForm" data-toggle="validator" className="shake">
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      required
                      data-error="Please fill Out"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      required
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      id="mobile"
                      placeholder="Enter mobile"
                      required
                      data-error="Please fill Out"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group col-sm-6">
                    <select name="Dtype" id="Dtype" required>
                      <option value>Select Requirement</option>
                      <option value="web">web</option>
                      <option value="graphic">graphic</option>
                      <option value="video">video</option>
                    </select>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Enter your message"
                    required
                    defaultValue={''}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck"
                    name="example1"
                    defaultChecked="checked"
                  />
                  <label className="custom-control-label" htmlFor="customCheck">
                    I agree to the <a href="#">Terms &amp; Conditions</a> of
                    Business Name.
                  </label>
                </div>
                <button
                  type="submit"
                  id="form-submit"
                  className="btn lnk btn-main bg-btn"
                >
                  Submit <span className="circle" />
                  Submit
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
                <p className="trm">
                  <i className="fas fa-lock" />
                  We hate spam, and we respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
