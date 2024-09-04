import React from 'react'

import BlogPage from '../components/BlogPage'
import CarouselBanner from '../components/CarouselBanner'



const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <CarouselBanner />
      
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Home