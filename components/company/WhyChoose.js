import Link from 'next/link'
export default function () {
  return (
    <section className="why-choose pad-tb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="common-heading">
              <span>We Are Awesome</span>
              <h2 className="mb30">
                <Link href="/why-epagestore">Why Choose Us</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="row upset">
          <div className="col-lg-3 col-sm-6 mt30">
            <div className="s-block up-hor">
              <div className="s-card-icon">
                <img
                  src="/images/icons/research.svg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
              <h4>Reasearch and Analysis</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt30">
            <div className="s-block up-hor">
              <div className="s-card-icon">
                <img
                  src="/images/icons/chat.svg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
              <h4>Negotiation and power</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt30">
            <div className="s-block up-hor">
              <div className="s-card-icon">
                <img
                  src="/images/icons/monitor.svg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
              <h4>Creative and innovative solutions</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mt30">
            <div className="s-block up-hor">
              <div className="s-card-icon">
                <img
                  src="/images/icons/trasparency.svg"
                  alt="service"
                  className="img-fluid"
                />
              </div>
              <h4>Trasparency and ease of work</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
