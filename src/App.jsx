import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
