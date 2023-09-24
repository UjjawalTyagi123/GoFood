import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carusol from '../components/Carusol'

function Home() {
  return (
   <>
    <div><Navbar/></div>
    <div><Carusol/></div>
    <div><Card/></div>
    <div><Footer/></div>
   </>
  )
}

export default Home
