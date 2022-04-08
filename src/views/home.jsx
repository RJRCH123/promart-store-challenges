import React from 'react'
import NavDesktop from '../components/navDesktop'
import NavMobileBotton from '../components/navMobileBotton'
import NavMobileTop from '../components/navMobileTop'

function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <NavDesktop/>
      <NavMobileTop/>
      
      <NavMobileBotton/>
    </div>
  )
}

export default Home