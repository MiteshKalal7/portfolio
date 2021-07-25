import Link from 'next/link'
import {
  About,
  Service,
  Statistics,
  Portfolio,
  Clients,
  Category,
  Hero,
} from '../components/home'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import Header from './../components/Header'
import Location from './../components/Location'
import Testinomial from './../components/Testinomial'
import { getServicesMenu } from '../services'

export default function Home(props) {
  // console.log('in root')
  // console.log(props)
  return (
    <div>
      <Head>{renderHTML(props.metaTags)}</Head>
      <Header services={props.servicesProps} />
      <Hero />
      <About />
      <Service />
      <Statistics />
      <Portfolio />
      <Clients />
      <Category />
      <Testinomial />
      <Location />
    </div>
  )
}

export async function getStaticProps() {
  const res = await getServicesMenu('category')
  const result = await res.result

  return {
    props: {
      metaTags: '<title>Home Page</title>',
      servicesProps: result,
    },
  }
}
