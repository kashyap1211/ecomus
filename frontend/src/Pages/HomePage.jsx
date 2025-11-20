import React from 'react'
import Hero from '../Containers/Home/Hero'
import Marquee from '../Containers/Home/Marquee'
import Categories from '../Containers/Home/Categories'
import BestSeller from '../Containers/Home/BestSeller'
import ShoptheLook from '../Containers/Home/ShoptheLook'
import HappyClients from '../Containers/Home/HappyClients'
import ShopGram from '../Containers/Home/ShopGram'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Marquee/>
      <Categories/>
      <BestSeller/>
      <ShoptheLook/>
      <HappyClients/>
      <ShopGram/>
    </div>
  )
}

export default HomePage
