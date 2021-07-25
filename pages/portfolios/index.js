import Hero from '../../components/Hero'
import Link from 'next/link'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import Header from './../../components/Header'
import { getServicesMenu } from '../../services'

// import Contact from './Contact'
// import Office from './Office'

export default function (props) {
  return (
    <>
      <Head>{renderHTML(props.metaTags)}</Head>
      <Header services={props.servicesProps} />
      <Hero page="Portfolio" title="Our Projects" />
      <section className="portfolio-page pad-tb">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-lg-6">
              <div className="common-heading pp">
                <span>Our Work</span>
                <h2>Portfolio</h2>
              </div>
            </div>
            <div className="col-lg-6 v-center">
              <div className="filters">
                <ul className="filter-menu">
                  <li data-filter="*" className="is-checked">
                    All
                  </li>
                  <li data-filter=".website">Website</li>
                  <li data-filter=".app">Mobile App</li>
                  <li data-filter=".graphic">Graphic</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row card-list">
            <div className="col-lg-12 col-md-12 grid-sizer" />
            <div className="col-lg-12 col-sm-12 single-card-item app">
              <div className="portfolio-block bg-gradient8">
                <div className="portfolio-item-info">
                  <span>ios, design</span>
                  <h3 className="mt30 mb30">
                    <Link href="/portfolio-detail">
                      UX design for a startup focusing on measuring Team
                      Performance
                    </Link>
                  </h3>
                  <div className="reviews-card pr-shadow">
                    <div className="review-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="-client-details-">
                      <div className="-reviewr">
                        <img
                          src="images/client/reviewer-a.jpg"
                          alt="Good Review"
                          className="img-fluid"
                        />
                      </div>
                      <div className="reviewer-text">
                        <h4>Mario Speedwagon</h4>
                        <p>
                          Business Owner, <small>Jaipur</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item-image">
                  <Link href="/portfolio-detail">
                    <img
                      src="images/portfolio/website-mockup1.jpg"
                      alt="portfolio"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 single-card-item website">
              <div className="portfolio-block bg-gradient6">
                <div className="portfolio-item-info">
                  <span>ios, design</span>
                  <h3 className="mt30 mb30">
                    <a href="#">
                      UX design for a startup focusing on measuring Team
                      Performance
                    </a>
                  </h3>
                  <div className="reviews-card pr-shadow">
                    <div className="review-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="-client-details-">
                      <div className="-reviewr">
                        <img
                          src="images/client/reviewer-a.jpg"
                          alt="Good Review"
                          className="img-fluid"
                        />
                      </div>
                      <div className="reviewer-text">
                        <h4>Mario Speedwagon</h4>
                        <p>
                          Business Owner, <small>Jaipur</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/website-mockup2.jpg"
                      alt="portfolio"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 single-card-item graphic">
              <div className="portfolio-block bg-gradient4">
                <div className="portfolio-item-info">
                  <span>ios, design</span>
                  <h3 className="mt30 mb30">
                    <a href="#">
                      UX design for a startup focusing on measuring Team
                      Performance
                    </a>
                  </h3>
                  <div className="reviews-card pr-shadow">
                    <div className="review-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="-client-details-">
                      <div className="-reviewr">
                        <img
                          src="images/client/reviewer-a.jpg"
                          alt="Good Review"
                          className="img-fluid"
                        />
                      </div>
                      <div className="reviewer-text">
                        <h4>Mario Speedwagon</h4>
                        <p>
                          Business Owner, <small>Jaipur</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/website-mockup3.jpg"
                      alt="portfolio"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 single-card-item website">
              <div className="portfolio-block bg-gradient9">
                <div className="portfolio-item-info">
                  <span>ios, design</span>
                  <h3 className="mt30 mb30">
                    <a href="#">
                      UX design for a startup focusing on measuring Team
                      Performance
                    </a>
                  </h3>
                  <div className="reviews-card pr-shadow">
                    <div className="review-text">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div className="-client-details-">
                      <div className="-reviewr">
                        <img
                          src="images/client/reviewer-a.jpg"
                          alt="Good Review"
                          className="img-fluid"
                        />
                      </div>
                      <div className="reviewer-text">
                        <h4>Mario Speedwagon</h4>
                        <p>
                          Business Owner, <small>Jaipur</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-item-image">
                  <a href="#">
                    <img
                      src="images/portfolio/website-mockup4.jpg"
                      alt="portfolio"
                      className="img-fluid"
                    />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export async function getStaticProps() {
  const res = await getServicesMenu()
  const result = await res.result

  return {
    props: {
      metaTags: '<title>Portfolios</title>',
      servicesProps: result,
    },
  }
}
