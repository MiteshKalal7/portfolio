// import LOGO from './../img/logo.png'
// import LOGO2 from './../img/logo-2.png'
import { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { getServicesMenu } from '../services'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Header(props) {
  const history = useRouter()
  const [services, setServices] = useState([
    {
      _id: '60cf335bc9232a1c80e46f30',
      name: 'Web developement',
      slug: 'web-development',
      services: [
        {
          _id: '60d01f8d1ce12149dcfb1af4',
          name: 'PHP Development',
          categoryId: '60cf335bc9232a1c80e46f30',
          slug: 'php-development',
        },
        {
          _id: '60d01f951ce12149dcfb1af6',
          name: 'ReactJS Development',
          categoryId: '60cf335bc9232a1c80e46f30',
          slug: 'react-js-development',
        },
        {
          _id: '60d01f991ce12149dcfb1af8',
          name: 'VUE JS Development',
          categoryId: '60cf335bc9232a1c80e46f30',
          slug: 'vue-js-development',
        },
        {
          _id: '60d01faa1ce12149dcfb1afa',
          name: 'AngularJS Development',
          categoryId: '60cf335bc9232a1c80e46f30',
          slug: 'angular-js-development',
        },
      ],
    },
    {
      _id: '60cf3ac7c4707518a8544157',
      name: 'App development',
      slug: 'app-development',
      services: [
        {
          _id: '60cf3b449d21ba30d0f562d3',
          name: 'Android Development',
          categoryId: '60cf3ac7c4707518a8544157',
          slug: 'android-development',
        },
        {
          _id: '60cf6004362ade253c6a4c02',
          name: 'iOS Development',
          categoryId: '60cf3ac7c4707518a8544157',
          slug: 'ios-development',
        },
        {
          _id: '60d0241e1ce12149dcfb1b28',
          name: 'Cross Platform App Development',
          categoryId: '60cf3ac7c4707518a8544157',
          slug: 'cross-platform-app-development',
        },
      ],
    },
    {
      _id: '60d01f191ce12149dcfb1aee',
      name: 'CMS & ECOMMERCE',
      slug: 'cms-ecommerce',
      services: [],
    },
    {
      _id: '60d01f321ce12149dcfb1af0',
      name: 'DIGITAL MARKETING',
      slug: 'digital-marketing',
      services: [],
    },
    {
      _id: '60d01f431ce12149dcfb1af2',
      name: 'OTHER SERVICES',
      slug: 'other-services',
      services: [
        {
          _id: '60d023f91ce12149dcfb1b24',
          name: 'iPad App Developement',
          categoryId: '60d01f431ce12149dcfb1af2',
          slug: 'i-pad-app',
        },
        {
          _id: '60d218730a55a953b855f360',
          name: 'SEO',
          categoryId: '60d01f431ce12149dcfb1af2',
          slug: 'seo-services',
        },
      ],
    },
    {
      _id: '60d02672e8974d4684a30640',
      name: 'Testing',
      slug: 'testing-13124',
      services: [
        {
          _id: '60d35d68b2123f09446027a9',
          name: '999999',
          categoryId: '60d02672e8974d4684a30640',
          slug: '999999',
        },
      ],
    },
  ])
  const navClass = history.pathname === '/' ? 'nav-bg-b' : 'nav-bg-w'
  // useEffect(() => {
  //   getServicesMenu()
  //     .then((res) => {
  //       setServices(res.result)
  //     })
  //     .catch((err) => {
  //       console.log('getServicesMenu err : ' + err)
  //     })
  // }, [])

  return (
    <div>
      <header className={`${navClass} main-header navfix fixed-top menu-white`}>
        <div className="container-fluid m-pad">
          <div className="menu-header">
            <Link href="/">
              <div className="dsk-logo" style={{ cursor: 'pointer' }}>
                <a className="nav-brand">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="mega-white-logo"
                  />
                  <img
                    src={'/images/logo.png'}
                    alt="Logo"
                    className="mega-darks-logo"
                  />
                </a>
              </div>
            </Link>
            <div className="custom-nav" role="navigation">
              <ul className="nav-list">
                <li className="sbmenu">
                  <Link href="/services">
                    <a className="menu-links"> Services</a>
                  </Link>
                  <div className="nx-dropdown">
                    <div className="sub-menu-section">
                      <div className="container">
                        <div className="row">
                          {services && services.length > 0
                            ? services.map((item, i) => {
                                let addClass = i > 3 ? 'mt-3' : ''
                                return (
                                  <>
                                    <div className="sub-menu-column col-md-3">
                                      <div
                                        className={`menuheading ${addClass}`}
                                      >
                                        <Link href={`/services/${item.slug}`}>
                                          <a>{item.name}</a>
                                        </Link>
                                      </div>
                                      <ul>
                                        {item.services.map((service) => {
                                          return (
                                            <li>
                                              <Link
                                                href={`/services/${item.slug}/${service.slug}`}
                                              >
                                                <a>{service.name}</a>
                                              </Link>
                                            </li>
                                          )
                                        })}
                                      </ul>
                                    </div>
                                  </>
                                )
                              })
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="">
                  <Link href="/company">
                    <a className="menu-links">Company</a>
                  </Link>
                </li>
                <li className="rpdropdown">
                  <Link href="/portfolios">
                    <a className="menu-links">Portfolio</a>
                  </Link>
                </li>
                <li className="rpdropdown">
                  <Link href="/contact-us">
                    <a className="menu-links">Contact us</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="menu-links right-bddr">
                    &nbsp;
                  </a>
                  {/*menu right border*/}
                </li>
                <li className="contact-show">
                  <a href="#" className="btn-round- trngl btn-br bg-btn">
                    <i className="fas fa-phone-alt" />
                  </a>
                  <div className="contact-inquiry">
                    <div className="contact-info-">
                      <div className="contct-heading">Niwax Contacts</div>
                      <div className="inquiry-card-nn hrbg">
                        <div className="title-inq-c">FOR HR DEPARTMENT</div>
                        <ul>
                          <li className="mb0">
                            <img
                              src="images/flags/us.svg"
                              alt="us office"
                              className="flags-size"
                            />{' '}
                            <a href="tel:1111111111">+1-123-456-7890</a>
                          </li>
                        </ul>
                      </div>
                      <div className="inquiry-card-nn">
                        <div className="title-inq-c">FOR SALES DEPARTMENT</div>
                        <ul>
                          <li>
                            <a href="tel:1111111111">
                              <img
                                src="images/flags/us.svg"
                                alt="us office"
                                className="flags-size"
                              />{' '}
                              +1-123-456-7890
                            </a>
                          </li>
                          <li>
                            <a href="tel:1111111111">
                              <img
                                src="images/flags/au.svg"
                                alt="australia office"
                                className="flags-size"
                              />{' '}
                              +1-123-456-7890
                            </a>
                          </li>
                          <li>
                            <i className="fab fa-skype" />
                            <a href="skype:niwax.company?call">niwax.company</a>
                          </li>
                          <li>
                            <i className="fas fa-envelope" />
                            <a href="mailto:info@businessname.com">
                              info@businessname.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="get-quote.html"
                    className="btn-br bg-btn3 btshad-b2 lnk"
                  >
                    Request A Quote <span className="circle" />
                  </a>{' '}
                </li>
              </ul>
            </div>
            <div className="mobile-menu2">
              <ul className="mob-nav2">
                <li>
                  <a
                    href="#"
                    className="btn-round- trngl btn-br bg-btn btshad-b1"
                    data-toggle="modal"
                    data-target="#menu-popup"
                  >
                    <i className="fas fa-envelope-open-text" />
                  </a>
                </li>
                <li className="navm-">
                  {' '}
                  <a className="toggle" href="#">
                    <span />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*Mobile Menu*/}
          <nav id="main-nav">
            <ul className="first-nav">
              <li>
                <a href="#">Services</a>
                <li>
                  <a href="#">Multi-Page Demo</a>
                  <ul>
                    <li>
                      <Link href="/">Homepage</Link>
                    </li>
                    <li>
                      <a href="digital-agency.html">Digital Agency</a>
                    </li>
                    <li>
                      <a href="digital-agency-dark.html">Digital Agency Dark</a>
                    </li>
                    <li>
                      <a href="web-design-agency.html">Web Design Agency</a>
                    </li>
                    <li>
                      <a href="web-design-agency-dark.html">
                        Web Design Agency Dark
                      </a>
                    </li>
                    <li>
                      <a href="digital-marketing.html">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="digital-marketing-dark.html">
                        Digital Marketing Dark
                      </a>
                    </li>
                    <li>
                      <a href="lead-generation.html">Lead Generation Agency</a>
                    </li>
                    <li>
                      <a href="lead-generation-dark.html">
                        Lead Generation Agency Dark
                      </a>
                    </li>
                    <li>
                      <a href="freelance-portfolio.html">Freelance Portfolio</a>
                    </li>
                    <li>
                      <a href="freelance-portfolio-dark.html">
                        Freelance Portfolio Dark
                      </a>
                    </li>
                    <li>
                      <a href="minimal-portfolio.html">Minimal Portfolio</a>
                    </li>
                    <li>
                      <a href="creative-agency.html">Creative Agency</a>
                    </li>
                    <li>
                      <a href="branding-agency.html">Branding Agency</a>
                    </li>
                    <li>
                      <a href="app-development.html">App Development Agency</a>
                    </li>
                    <li>
                      <a href="modern-agency.html">Modern Agency</a>
                    </li>
                    <li>
                      <a href="business-and-startup.html">
                        Business &amp; Startup
                      </a>
                    </li>
                    <li>
                      <a href="graphic-studio.html">Graphic Studio</a>
                    </li>
                  </ul>
                </li>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="prb">
                <a href="tel:+11111111111">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
                    <path
                      d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                              c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                              c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                              C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                    />
                  </svg>
                </a>
              </li>
              <li className="prb">
                <a href="mailto:somewebmedia@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </a>
              </li>
              <li className="prb">
                <a href="skype:niwax.company?call">
                  <svg
                    enableBackground="new 0 0 24 24"
                    height={18}
                    viewBox="0 0 24 24"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*Mobile contact*/}
      <div className="popup-modal1">
        <div className="modal" id="menu-popup">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="common-heading">
                  <h4 className="mt0 mb0">Write a Message</h4>
                </div>
                <button type="button" className="closes" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-block fdgn2 mt10 mb10">
                  <form action="#" method="post" name="feedback-form">
                    <div className="fieldsets row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="number"
                          placeholder="Contact Number"
                          name="phone"
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          placeholder="Message"
                          name="message"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="fieldsets mt20 pb20">
                      <button
                        type="submit"
                        name="submit"
                        className="lnk btn-main bg-btn"
                        data-dismiss="modal"
                      >
                        Submit <i className="fas fa-chevron-right fa-icon" />
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
      {/*Mobile contact*/}
      {/*End Header */}
    </div>
  )
}

export default Header
