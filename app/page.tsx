import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import Nosotros       from '@/components/Nosotros'
import PhotoSlider    from '@/components/PhotoSlider'
import PorQueElla     from '@/components/PorQueElla'
import LoQueMasQuiero from '@/components/LoQueMasQuiero'
import Footer         from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <PhotoSlider />
      <PorQueElla />
      <LoQueMasQuiero />
      <Footer />
    </main>
  )
}
