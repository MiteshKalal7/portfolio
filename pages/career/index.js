import Hero from '../../components/Hero'
import { About, WhyChoose, Jobs } from '../../components/career'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import Header from './../../components/Header'
import { getServicesMenu } from '../../services'

export default function (props) {
  return (
    <>
      <Head>{renderHTML(props.metaTags)}</Head>
      <Header services={props.servicesProps} />
      <Hero page="Career" title="Job Openings" />
      <About />
      <WhyChoose />
      <Jobs />
    </>
  )
}

export async function getStaticProps() {
  const res = await getServicesMenu()
  const result = await res.result

  return {
    props: {
      metaTags: '<title>Career</title>',
      servicesProps: result,
    },
  }
}
