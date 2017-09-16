import React from 'react'

import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const App = () => (
  <div className='app-wrapper'>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default App