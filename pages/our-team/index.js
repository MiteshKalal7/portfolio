import Hero from '../../components/Hero'
import { Leaders, Members } from './../../components/team'

export default function () {
  return (
    <>
      <Hero page="Team" title="Our Leaders" />
      <Leaders />
      <Members />
    </>
  )
}
