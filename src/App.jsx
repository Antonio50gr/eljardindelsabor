import Dishes from "./componentts/Dishes"
import HeroSection from "./componentts/HeroSection"
import About from "./componentts/About"
import ContactSection from "./componentts/ContactSection"
import Footer from "./componentts/Footer"

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection/>
      <Dishes/>
      <About/>          
      <ContactSection/>
      <Footer/>
      
    </main>
  )
}

export default App