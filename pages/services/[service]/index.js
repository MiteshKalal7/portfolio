import { useRouter } from 'next/router'
import {
  Hero,
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
} from './../../../components/service'

const Post = () => {
  const router = useRouter()
  const { service } = router.query

  return (
    <div>
      <Hero />
      <Counter />
      <About />
      <KeyPoint />
      <Service />
      <Process />
      <WhyChoose />
      <Pricing />
      <Projects />
      <Reviews />
      <CTA />
    </div>
  )
}

export default Post
