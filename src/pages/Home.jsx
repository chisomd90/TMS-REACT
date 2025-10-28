import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from "../components/Navbar"

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