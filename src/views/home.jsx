import React from 'react'
import Footer from '../components/footer'
import NavDesktop from '../components/navDesktop'
import NavMobileBotton from '../components/navMobileBotton'
import NavMobileTop from '../components/navMobileTop'
import ProductCard from '../components/productCard'

function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <NavDesktop/>
      <NavMobileTop/>
      
      <ProductCard/>      
      <Footer/>
      <NavMobileBotton/>
    </div>
  )
}

export default Home