import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='bg-green-50'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home