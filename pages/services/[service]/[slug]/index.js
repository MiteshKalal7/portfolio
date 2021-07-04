import { useRouter } from 'next/router'
import Hero from './../../../../components/Hero'

const Post = () => {
  const router = useRouter()
  const { service, slug } = router.query

  return (
    <>
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

export default Post
