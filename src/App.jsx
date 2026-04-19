import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import ProjectPage from './components/ProjectsPage/projectPage'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectPage />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
