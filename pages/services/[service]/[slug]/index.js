import { useRouter } from 'next/router'
import Hero from './../../../../components/Hero'
import Head from 'next/head'
import renderHTML from 'react-render-html'
import { getMetaData, getServicesMenu } from '../../../../services'
import Header from '../../../../components/Header'

const Index = ({ metaTags, servicesProps }) => {
  const router = useRouter()
  const { service, slug } = router.query

  return (
    <>
      <Head>{renderHTML(metaTags)}</Head>
      <Header services={servicesProps} />
      <Hero
        prevPage={service}
        prevPageLink={`services/${service}`}
        page={slug}
        title={slug}
      />
      coming soon : {service} + {slug}
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
  let result = []
  let result_ = []

  try {
    const res = await getMetaData(params.slug, '2')
    result = await res.meta

    const res_ = await getServicesMenu()
    result_ = await res_.result
  } catch (err) {}

  return {
    props: {
      metaTags: result,
      servicesProps: result_,
    },
  }
}

export default Index
