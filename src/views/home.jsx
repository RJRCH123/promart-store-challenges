import React from 'react'
import NavDesktop from '../components/navDesktop'
import NavMobileBotton from '../components/navMobileBotton'
import NavMobileTop from '../components/navMobileTop'
import Products from '../components/products'
import Footer from '../components/footer'

function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <NavDesktop/>
      <NavMobileTop/>
      <Products/>
      <Footer/>
      <NavMobileBotton/>
    </div>
  )
}

export default Home