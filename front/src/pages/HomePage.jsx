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

          <HeroSlider />

        <ProductsSection />

        <NewArrivals />

        <FeaturesSection />

        <Footer />
    </div>
  )
}

export default HomePage