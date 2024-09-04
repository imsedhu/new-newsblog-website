import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5' >Welcome to our Blog!</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae ex iure sit, ea nesciunt sunt, consectetur consequuntur exercitationem earum quo, corporis maiores. Odio vintae, est eius ipsam voluptates delectus?
        </p>
        <div>
          <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner