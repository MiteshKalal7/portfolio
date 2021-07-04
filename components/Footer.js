// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-row1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="email-subs">
                <h3>Get New Insights Weekly</h3>
                <p>
                  News letter dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Enter your email
                </p>
              </div>
            </div>
            <div className="col-lg-6 v-center">
              <div className="email-subs-form">
                <form>
                  <input
                    type="email"
                    placeholder="Email Your Address"
                    name="emails"
                  />
                  <button
                    type="submit"
                    name="submit"
                    className="lnk btn-main bg-btn"
                  >
                    Subscribe <i className="fas fa-chevron-right fa-icon" />
                    <span className="circle" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-sm-6  ftr-brand-pp">
              <a className="navbar-brand mt30 mb25" href="#">
                {' '}
                <img src="/images/logo.png" alt="Logo" width={100} />
              </a>
              <p>
                News letter dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Enter your email
              </p>
              <a href="#" className="btn-main bg-btn3 lnk mt20">
                Become Partner <i className="fas fa-chevron-right fa-icon" />
                <span className="circle" />
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5>Contact Us</h5>
              <ul className="footer-address-list ftr-details">
                <li>
                  <span>
                    <i className="fas fa-envelope" />
                  </span>
                  <p>
                    Email{' '}
                    <span>
                      {' '}
                      <a href="mailto:info@epagestore.com">
                        info@epagestore.com
                      </a>
                    </span>
                  </p>
                </li>
                <li>
                  <span>
                    <i className="fas fa-phone-alt" />
                  </span>
                  <p>
                    Phone{' '}
                    <span>
                      {' '}
                      <a href="tel:+919601099991">+91 96010 99991</a>
                    </span>
                  </p>
                </li>
                <li>
                  <span>
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <p>
                    Address <span> Satellite, Ahmedabad, India.</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6">
              <h5>Company</h5>
              <ul className="footer-address-list link-hover">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Customer's FAQ</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Refund Policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Privacy Policy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Terms and Conditions</a>
                </li>
                <li>
                  <a href="javascript:void(0)">License &amp; Copyright</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-6 footer-blog-">
              <h5>Latest Blogs</h5>
              <div className="single-blog-">
                <div className="post-thumb">
                  <a href="#">
                    <img src="/images/blog/blog-small.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <p className="post-meta">
                    <span className="post-date">
                      <i className="far fa-clock" />
                      April 15, 2020
                    </span>
                  </p>
                  <h4 className="title">
                    <a href="blog-sngle.html">
                      We Provide you Best &amp; Creative Consulting Service
                    </a>
                  </h4>
                </div>
              </div>
              <div className="single-blog-">
                <div className="post-thumb">
                  <a href="#">
                    <img src="/images/blog/blog-small.jpg" alt="blog" />
                  </a>
                </div>
                <div className="content">
                  <p className="post-meta">
                    <span className="post-date">
                      <i className="far fa-clock" />
                      April 15, 2020
                    </span>
                  </p>
                  <h4 className="title">
                    <a href="blog-sngle.html">
                      We Provide you Best &amp; Creative Consulting Service
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-brands">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 v-center">
              <h5 className="mb10">Top App Development Companies</h5>
              <p>
                News letter dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Enter your email
              </p>
            </div>
            <div className="col-lg-8 v-center">
              <ul className="footer-badges-">
                <li>
                  <a href="#">
                    <img src="/images/about/badges-a.png" alt="badges" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/about/badges-b.png" alt="badges" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/about/badges-c.png" alt="badges" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/images/about/badges-d.png" alt="badges" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row3">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-social-media-icons">
                  <a href="https://www.facebook.com/EPAGESTORE" target="blank">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="https://twitter.com/epagestore" target="blank">
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/epagestore/"
                    target="blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/epagestore"
                    target="blank"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="https://www.youtube.com/c/Epagestore" target="blank">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
                <div className="footer-">
                  <p>Copyright © 2020 . All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
