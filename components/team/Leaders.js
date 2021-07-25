import Link from 'next/link'
export default function () {
  return (
    <section className="team bg-gradient99 pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag">
              <span>We Are Awesome</span>
              <h2>Our Managing Directors</h2>
              <p className="mb0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="full-image-card hover-scale">
              <div className="image-div">
                <Link href="/team-details" style={{ cursor: 'pointer' }}>
                  <a>
                    <img
                      src="/images/team/team-a.jpg"
                      alt="team"
                      className="img-fluid"
                    />
                  </a>
                </Link>
              </div>
              <div className="info-text-block">
                <h4>
                  <a href="#">Sasa Smile</a>
                </h4>
                <p>Company CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="full-image-card hover-scale">
              <div className="image-div">
                <a href="#">
                  <img
                    src="/images/team/team-b.jpg"
                    alt="team"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="info-text-block">
                <h4>
                  <a href="#">Moana Smile</a>
                </h4>
                <p>Company CTO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="full-image-card hover-scale">
              <div className="image-div">
                <a href="#">
                  <img
                    src="/images/team/team-c.jpg"
                    alt="team"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="info-text-block">
                <h4>
                  <a href="#">Bhvika Smile</a>
                </h4>
                <p>Company COO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
