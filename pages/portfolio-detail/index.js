import Hero from '../../components/Hero'
import Link from 'next/link'

// import Contact from './Contact'
// import Office from './Office'

function Dashboard() {
  return (
    <>
      <Hero
        prevPage="Portfolio"
        prevPageLink="portfolios"
        page="Portfolio Details"
        title="Our Portfolio"
      />
      <section className="portfolio-page pad-tb">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-lg-7">
              <div className="common-heading pp p-details">
                <span>Branding Creative</span>
                <h1>Justo Erat Tempor Eros Adipiscing</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse faucibus, risus sit amet auctor sodales, justo
                  erat tempor eros.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="portfolio-details">
                <div className="portfolio-meta link-hover">
                  <ul>
                    <li>
                      <i className="fas fa-user" />
                      <p>
                        Client Name: <span>Creative Tom</span>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-tags" />
                      <p>
                        Project Category: <span>Web design, Developments</span>
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt" />
                      <p>
                        Project Date: <span>20 May 2020</span>
                      </p>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Open External Link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 single-card-item">
              <div className="isotope_item pv-">
                <div className="item-image">
                  <img
                    src="images/portfolio/project-view-1.jpg"
                    alt="project name"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="isotope_item pv- mt30">
                <div className="item-image">
                  <img
                    src="images/portfolio/project-view-2.jpg"
                    alt="project name"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
