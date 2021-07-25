import Hero from '../../components/Hero'
import { Leaders, Members } from './../../components/team'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import Header from './../../components/Header'
import { getServicesMenu } from '../../services'

export default function (props) {
  return (
    <>
      <Head>{renderHTML(props.metaTags)}</Head>
      <Header services={props.servicesProps} />
      <Hero page="Team" title="Our Leaders" />
      <section className="team pad-tb deep-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-5">
              <div className="image-block upset bg-shape">
                <div className="image-div">
                  <a href="#">
                    <img
                      src="images/team/team-single.jpg"
                      alt="team"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="full-image-card mt0">
                <div className="info-text-block">
                  <h4>
                    <a href="#">Anna Rexia</a>
                  </h4>
                  <p>Company CTO</p>
                </div>
                <div className="otherinfo">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. is
                    simply dummy text of the printing and typesetting industry.{' '}
                  </p>
                  <div className="social-media-profile">
                    <a href="#" target="blank">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#" target="blank">
                      <i className="fab fa-dribbble" />
                    </a>
                  </div>
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
      metaTags: '<title>Team Details</title>',
      servicesProps: result,
    },
  }
}
