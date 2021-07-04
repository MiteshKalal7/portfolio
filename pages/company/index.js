import Hero from '../../components/Hero'
import { About, WhyChoose } from './../../components/company'

export default function () {
  return (
    <>
      <Hero page="Company" title="About Our Company" />
      <About />
      <WhyChoose />
    </>
  )
}
