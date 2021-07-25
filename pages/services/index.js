import Header from '../../components/Header'
import Hero from '../../components/Hero'
// import Link from 'next/link'
// import { Helmet } from 'react-helmet'
// import { useEffect, useState } from 'react'
// import Head from 'next/head'
// import dynamic from 'next/dynamic'
import { getMetaData, getServicesMenu } from '../../services'
import Head from 'next/head'
import renderHTML from 'react-render-html'

function Index({ metaTags, servicesProps }) {
  return (
    <>
      <Head>{renderHTML(metaTags)}</Head>
      <Header services={servicesProps} />

      <Hero page="Services" title="Our Services" />
      <section className="element-page pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="common-heading">
                <h2 className="mb30">Services</h2>
              </div>
            </div>
          </div>
          <div className="row upset ovr-bg2 bd-hor">
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="s-block up-hor bd-hor-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/branding.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Social Media Marketing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="#">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="s-block up-hor bd-hor-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/development.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Branding &amp; Identity</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="#">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="s-block up-hor bd-hor-base">
                <div className="nn-card-set">
                  <div className="s-card-icon">
                    <img
                      src="images/icons/app.svg"
                      alt="service"
                      className="img-fluid"
                    />
                  </div>
                  <h4>Performance Marketing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a href="#">
                    Learn More <i className="fas fa-chevron-right fa-icon" />
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
  const res = await getMetaData('category')
  const result = await res.meta
  const res_ = await getServicesMenu()
  const result_ = await res_.result

  return {
    props: {
      metaTags: result,
      servicesProps: result_,
    },
  }
}

export default Index
