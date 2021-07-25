import { useRouter } from 'next/router'
import {
  Counter,
  About,
  KeyPoint,
  Service,
  Process,
  WhyChoose,
  Reviews,
  Projects,
  Pricing,
  CTA,
  LatestStories,
  HaveQuestion,
} from './../../../components/service'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import { getMetaData, getServicesMenu } from '../../../services'
import Header from '../../../components/Header'
import Location from '../../../components/Location'
import Testinomial from '../../../components/Testinomial'
import Hero from '../../../components/Hero'

const Index = ({ metaTags, servicesProps }) => {
  const router = useRouter()
  const { service } = router.query

  return (
    <>
      <Head>{renderHTML(metaTags)}</Head>
      <Header services={servicesProps} />

      <Hero />
      <Counter />
      <h1 className="text-center">Image Block will come....</h1>
      <Service />
      <WhyChoose />
      <Testinomial />
      <LatestStories />
      <HaveQuestion />
      <Location />
      {/* <About />
      <KeyPoint />
      <Process />
      <Pricing />
      <Projects />
      <Reviews />
      <CTA /> */}
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const res = await getMetaData(params.service, '1')
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
