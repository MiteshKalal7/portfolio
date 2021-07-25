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
      <Leaders />
      <Members />
    </>
  )
}

export async function getStaticProps() {
  const res = await getServicesMenu()
  const result = await res.result

  return {
    props: {
      metaTags: '<title>Our Team</title>',
      servicesProps: result,
    },
  }
}
