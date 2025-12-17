import React from 'react'
import Sections from './components/Sections.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx'
import './App.css'
import HeaderNavbar from './components/HeaderNavbar.jsx'





function App() {
  return (
    <div>
      <HeaderNavbar/>
      <Sections />
      <Services />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App