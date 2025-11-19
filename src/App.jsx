import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import StudioSlider from './components/StudioSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Subtle cinematic background gradient + glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 left-0 right-0 mx-auto h-80 w-[80%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Transformations />
        <StudioSlider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App