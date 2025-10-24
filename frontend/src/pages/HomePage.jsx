import React from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import Policy from '../components/Layout/Policy/Policy'
import Slider from '../components/Slider/Slider'
import Products from '../components/Products/Products'
import Categories from '../components/Categories/Categories'
import Campaigns from '../components/Campaigns/Campaigns'
import Blogs from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'        

const HomePage = () => {
  return (
     <>
  
      <Slider />
      <Categories />
      <Products />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Campaigns />

     </>
  )
}

export default HomePage
