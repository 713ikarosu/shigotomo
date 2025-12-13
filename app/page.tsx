import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Service from './components/Service'
import Plan from './components/Plan'
import { Flow, FAQ } from './components/FlowAndFAQ'
import ApplySection from './components/ApplySection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Service />
      <Plan />
      <Flow />
      <FAQ />
      <ApplySection />
      <Footer />
    </main>
  )
}
