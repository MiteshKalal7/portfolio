import Head from 'next/head'
import Link from 'next/link'
import {
  About,
  Service,
  Statistics,
  Portfolio,
  Clients,
  Category,
  Testinomial,
  Location,
  Hero,
} from '../components/home'

export default function Home() {
  return (
    <div>
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
