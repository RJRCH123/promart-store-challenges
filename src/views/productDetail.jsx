import React from 'react'
import Footer from '../components/footer'
import NavDesktop from '../components/navDesktop'
import NavMobileBotton from '../components/navMobileBotton'
import NavMobileTop from '../components/navMobileTop'
import ProductCardDetail from '../components/productCardDetail'

function ProductDetail() {
  return (
    <section>
      <NavDesktop/>
      <NavMobileTop/>
      <NavMobileBotton/>
      <ProductCardDetail/>
      <Footer/>
    </section>
  )
}

export default ProductDetail