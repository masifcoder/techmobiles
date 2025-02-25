import React from 'react'
import Navbar from '../components/Navbar'
import ProductsSection from '../components/ProductSection'
import NewArrivals from '../components/NewArrivals'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <section className='py-6 pt-0' id='heroSection'>
        <HeroSlider />
      </section>

      <section className='py-6' id='productsSection'>
        <ProductsSection />
      </section>

      <section className='py-6' id='newArrivals'>
        <NewArrivals />
      </section>

      <section className='py-6' id='featuredSection'>
        <FeaturesSection />
      </section>

      <section className='py-6' id='footerSection'>
        <Footer />
      </section>

    </div>
  )
}

export default HomePage