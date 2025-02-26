import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductsSection from '../components/ProductSection'
import NewArrivals from '../components/NewArrivals'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider';
import {useSelector, useDispatch} from "react-redux";
import {purchase, sale, reset, bulkPurchase} from "../redux/counterSlice";

const HomePage = () => {
  const generalState = useSelector( state => state.general );
  const dispatcher = useDispatch();
  const [inputVal, setInputVal] = useState(0);
  return (
    <div>
      <Navbar />

      <section className='py-6 pt-0' id='heroSection'>
        <HeroSlider />
      </section>

      <div>
          <button onClick={ () => dispatcher(purchase()) } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">1 purchase from factory</button>
          <button onClick={ () => dispatcher(sale()) } className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">1 soap Sale to customer</button>
          <button onClick={ () => dispatcher(reset()) } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset Soaps to 10</button>

          <h1 className='my-3 text-2xl'>Total Soaps: {generalState.soap}</h1>
          <h1 className='my-3 text-2xl'>Total Shampo: {generalState.shampo}</h1>

          <input type='number' className='border ' onChange={ (e) => setInputVal(e.target.value) } />
          <button onClick={ () => dispatcher(bulkPurchase(inputVal)) } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Bulk Purchase</button>
      </div>

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