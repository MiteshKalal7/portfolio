export default function () {
  return (
    <div>
      <section className="contact-page pad-tb" id="jobs">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="common-heading ptag">
                <span>Jobs</span>
                <h2>Current Openings</h2>
                <p className="mb60">08 Sep 2020 Latest Jobs</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="career-card-div">
                <div id="accordion" className="accordion">
                  <div className="card-2">
                    <div className="card-header" id="acc1">
                      <button
                        className="btn btn-link btn-block text-left acc-icon"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-a"
                        aria-expanded="true"
                        aria-controls="collapse-a"
                      >
                        Web &amp; Visual Designer - 2 Post
                      </button>
                    </div>
                    <div
                      id="collapse-a"
                      className="card-body collapse show p0"
                      aria-labelledby="acc1"
                      data-parent="#accordion"
                    >
                      <div className="data-reqs">
                        <h5 className="pt20 pb20">Overview</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's specimen book. Lorem Ipsum is simply dummy
                          text of the printing and typesetting industry.{' '}
                        </p>
                        <h5 className="pt20 pb20">Required experience</h5>
                        <p>
                          5 Years Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's specimen book. Lorem Ipsum is
                          simply dummy text of the printing and typesetting
                          industry.{' '}
                        </p>
                        <h4 className="pb20 pt20">Skills Required:</h4>
                        <ul className="list-ul ul-check">
                          <li>Deep familiarity with Core PHP and Laravel</li>
                          <li>Experience of Ajax &amp; Jquery</li>
                          <li>
                            Good understanding of JSON &amp; third-party
                            libraries and APIs
                          </li>
                          <li>
                            Should be able to understand entire development life
                            cycle concept. (Design, build, deploy, test, deploy
                            online &amp; support)
                          </li>
                          <li>
                            Strong knowledge in Web Services &amp; API's, LBS,
                            Social Network Integration etc.
                          </li>
                          <li>Strong knowledge in database (Mysql)</li>
                          <li>Good Knowledge in Google APIs</li>
                          <li>
                            Good understanding of MVC concepts and design
                            patterns
                          </li>
                          <li>
                            Strong object oriented programming and design skills
                          </li>
                          <li>
                            Knowledge in versioning Tools that includes like
                            trunk, branch, export, import and copy will be an
                            added advantage
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn-main bg-btn3 lnk mt20"
                          data-toggle="modal"
                          data-target="#modalform"
                        >
                          Apply Now
                          <i className="fas fa-chevron-right fa-icon" />
                          <span className="circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-2 mt30">
                    <div className="card-header" id="acc2">
                      <button
                        className="btn btn-link btn-block text-left acc-icon collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse-b"
                        aria-expanded="true"
                        aria-controls="collapse-a"
                      >
                        Head of UX and Design - 3 Post
                      </button>
                    </div>
                    <div
                      id="collapse-b"
                      className="card-body collapse p0"
                      aria-labelledby="acc2"
                      data-parent="#accordion"
                    >
                      <div className="data-reqs">
                        <h5 className="pt20 pb20">Overview</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's specimen book. Lorem Ipsum is simply dummy
                          text of the printing and typesetting industry.{' '}
                        </p>
                        <h5 className="pt20 pb20">Required experience</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's specimen book. Lorem Ipsum is simply dummy
                          text of the printing and typesetting industry.{' '}
                        </p>
                        <h4 className="pb20 pt20">Skills Required:</h4>
                        <ul className="list-ul ul-check">
                          <li>Deep familiarity with Core PHP and Laravel</li>
                          <li>Experience of Ajax &amp; Jquery</li>
                          <li>
                            Good understanding of JSON &amp; third-party
                            libraries and APIs
                          </li>
                          <li>
                            Should be able to understand entire development life
                            cycle concept. (Design, build, deploy, test, deploy
                            online &amp; support)
                          </li>
                          <li>
                            Strong knowledge in Web Services &amp; API's, LBS,
                            Social Network Integration etc.
                          </li>
                          <li>Strong knowledge in database (Mysql)</li>
                          <li>Good Knowledge in Google APIs</li>
                          <li>
                            Good understanding of MVC concepts and design
                            patterns
                          </li>
                          <li>
                            Strong object oriented programming and design skills
                          </li>
                          <li>
                            Knowledge in versioning Tools that includes like
                            trunk, branch, export, import and copy will be an
                            added advantage
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn-main bg-btn3 lnk mt20"
                          data-toggle="modal"
                          data-target="#modalform"
                        >
                          Apply Now
                          <i className="fas fa-chevron-right fa-icon" />
                          <span className="circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Enquire Form*/}
      <div className="popup-modals">
        <div className="modal" id="modalform">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="common-heading">
                  <h4 className="mt0 mb0">Apply Now</h4>
                </div>
                <button type="button" className="closes" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body pt40 pb60">
                <div className="form-block fdgn2">
                  <form id="contact-form" method="post" action="#">
                    <div className="fieldsets row">
                      <div className="col-md-6 form-group">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Enter your name *"
                          required="required"
                        />{' '}
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Enter your email *"
                          required="required"
                        />{' '}
                      </div>
                    </div>
                    <div className="fieldsets row">
                      <div className="col-md-6 form-group">
                        <input
                          id="form_phone"
                          type="text"
                          name="phone"
                          placeholder="Enter your Phone No *"
                          required="required"
                        />{' '}
                      </div>
                      <div className="col-md-6 form-group">
                        <select id="form_need" name="need" required="required">
                          <option value>Select Post</option>
                          <option value="Graphic Design">Graphic Design</option>
                          <option value="Web Design">Web Design</option>
                          <option value="App Design">App Design</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="fieldsets form-group">
                      {' '}
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message *"
                        rows={4}
                        required="required"
                        defaultValue={''}
                      />{' '}
                    </div>
                    <div className="fieldsets- row">
                      <div className="col-md-12 form-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input mb0"
                            id="customFile"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile"
                          >
                            Choose file
                          </label>
                        </div>
                        <p>
                          <small>
                            Please upload maximum 5 files Only pdf, docx and doc
                            files.
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="fieldsets mt20">
                      <button type="submit" className="lnk btn-main bg-btn">
                        Submit Application
                        <span className="circle" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
