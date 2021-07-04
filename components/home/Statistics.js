// import { Link } from 'react-router-dom'

function Statistics() {
  return (
    <section className="why-choos-lg pad-tb deep-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="common-heading text-l">
              <span>Why Choose Us</span>
              <h2 className="mb20">
                Why The Niwax{' '}
                <span className="text-second text-bold">Ranked Top</span> Among
                The Leading Web &amp; App Development Companies
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="itm-media-object mt40 tilt-3d">
                <div className="media">
                  <div
                    className="img-ab- base"
                    data-tilt
                    data-tilt-max={20}
                    data-tilt-speed={1000}
                  >
                    <img
                      src="images/icons/computers.svg"
                      alt="icon"
                      className="layer"
                    />
                  </div>
                  <div className="media-body">
                    <h4>Streamlined Project Management</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc aliquet ligula nec leo elementum semper. Mauris
                      aliquet egestas metus.
                    </p>
                  </div>
                </div>
                <div className="media mt40">
                  <div
                    className="img-ab- base"
                    data-tilt
                    data-tilt-max={20}
                    data-tilt-speed={1000}
                  >
                    <img
                      src="images/icons/worker.svg"
                      alt="icon"
                      className="layer"
                    />
                  </div>
                  <div className="media-body">
                    <h4>A Dedicated Team of Experts</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc aliquet ligula nec leo elementum semper. Mauris
                      aliquet egestas metus.
                    </p>
                  </div>
                </div>
                <div className="media mt40">
                  <div
                    className="img-ab- base"
                    data-tilt
                    data-tilt-max={20}
                    data-tilt-speed={1000}
                  >
                    {' '}
                    <img
                      src="images/icons/deal.svg"
                      alt="icon"
                      className="layer"
                    />
                  </div>
                  <div className="media-body">
                    <h4>Completion of Project in Given Time</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc aliquet ligula nec leo elementum semper. Mauris
                      aliquet egestas metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              data-tilt
              data-tilt-max={5}
              data-tilt-speed={1000}
              className="single-image bg-shape-dez wow fadeIn"
              data-wow-duration="2s"
            >
              <img
                src="images/about/about-company.jpg"
                alt="image"
                className="img-fluid"
              />
            </div>
            <p className="text-center mt30">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="cta-card mt60 text-center">
              <h3 className="mb20">
                Let's Start a{' '}
                <span className="text-second text-bold">New Project</span>{' '}
                Together
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet ligula nec leo elementum semper.
              </p>
              <a href="#" className="btn-outline lnk mt30">
                Request A Quote <i className="fas fa-chevron-right fa-icon" />
                <span className="circle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
