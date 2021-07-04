import Hero from '../../components/Hero'
import Contact from './Contact'
import Office from './Office'
import Location from './Location'

function Dashboard() {
  return (
    <>
      <Hero page="Contact" title="Contact" />
      <Contact />
      <Office />
      <Location />
    </>
  )
}

export default Dashboard
