import Link from 'next/link'

function Hero({ title, page, prevPage, prevPageLink }) {
  return (
    <section className="hero-section hero-creative-agenc2">
      <div className="text-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 v-center">
              <div className="header-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Creative Digital Agency{' '}
                  <span className="text-primary">Focused</span> on{' '}
                  <span className="text-primary">Growing</span> Brands Online
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse faucibus, risus sit amet auctor sodales, justo
                  erat tempor eros.
                </p>
                <a
                  href="#"
                  className="btn-main bg-btn7 lnk wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  GET STARTED
                  <i className="fas fa-chevron-right fa-icon" />
                  <span className="circle" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 v-center">
              <div className="img-design h-scl-">
                <div className="imgac ">
                  {' '}
                  <img
                    src="/images/hero/creative-ag2a.jpg"
                    alt="creative agnecy html template"
                    className="ag-dg1 img-fluid h-scl-base"
                  />
                </div>
                <div className="imgac h-scl-base">
                  <img
                    src="/images/hero/creative-ag2b.jpg"
                    alt="creative agnecy html template"
                    className="ag-dg2 img-fluid "
                  />
                </div>
                <div className="shpdez1 shpdzz" />
                <div className="shpdez2 shpdzz" />
                <div className="shpdez3 shpdzz" />
                <div className="shpdez4 shpdzz" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
