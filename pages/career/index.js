import Hero from '../../components/Hero'
import { About, WhyChoose, Jobs } from '../../components/career'

export default function () {
  return (
    <>
      <Hero page="Career" title="Job Openings" />
      <About />
      <WhyChoose />
      <Jobs />
    </>
  )
}
