import Hero from '../../components/Hero'
import Contact from './Contact'
import Office from './Office'
import Location from './Location'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import Header from './../../components/Header'
import { getServicesMenu } from '../../services'

export default function (props) {
  return (
    <>
      <Head>{renderHTML(props.metaTags)}</Head>
      <Header services={props.servicesProps} />
      <Hero page="Contact" title="Contact" />
      <Contact />
      <Office />
      <Location />
    </>
  )
}

export async function getStaticProps() {
  const res = await getServicesMenu()
  const result = await res.result

  return {
    props: {
      metaTags: '<title>Contact Us</title>',
      servicesProps: result,
    },
  }
}
