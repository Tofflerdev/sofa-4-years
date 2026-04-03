import Hero from './components/Hero'
import Details from './components/Details'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import DressCode from './components/DressCode'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Details />
      <Timeline />
      <Menu />
      <Gallery />
      <DressCode />
      <Footer />
    </div>
  )
}
