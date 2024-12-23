import './App.css'
import { useEffect } from 'react'
import About from './components/about/About'
import User from './components/about/User'
import Articles from './components/articles/Articles'
import Brand from './components/brands/Brand'
import Choose from './components/choose/Choose'
import Footer from './components/footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import OurTeam from './components/ourTeam/OurTeam'
import Services from './components/services/Services'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,
      offset:50 // Set to false for animations on every scroll
    });
  }, []);
  return (
    <>
<Navbar/>
<Hero/>
<Brand/>
<About/>
<User/>
<Services/>
<Choose/>
<OurTeam/>
<Articles/>
<Footer/>
    </>
  )
}

export default App
