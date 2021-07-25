export default function () {
  return (
    <section className="about-agencys pad-tb block-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="common-heading text-l">
              <h2 className="mb20">Career and Culture at Niwax</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <a href="#jobs" className="btn-main bg-btn2 lnk mt30">
                {' '}
                View Opening <i className="fas fa-chevron-right fa-icon"></i>
                <span className="circle"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 v-center">
            <div className="image-block mb0 m-mt30">
              <img
                src="images/about/office-4.jpg"
                alt="about"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
