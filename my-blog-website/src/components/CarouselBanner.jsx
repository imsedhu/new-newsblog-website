import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const CarouselBanner = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ld3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1546422904-90eab23c3d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
    },

    {
      url: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      url: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className='max-w-[1600px] h-[690px] w-full m-auto py-20 px-4 relative group  '>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500 opacity-60'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* text content */}
    <div className='absolute top-0 left-0 h-full w-full flex'>
      
      <div className='text-center text-black my-auto w-full px-20'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 text-black' >Welcome to our Blog!</h1>
        <h2 className='text-black-100 lg:w-3/5 mx-auto mb-5 font-semibold text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos recusandae ex iure sit, ea nesciunt sunt, consectetur consequuntur exercitationem earum quo, corporis maiores. Odio vintae, est eius ipsam voluptates delectus?
        </h2>
        <div>
          <Link to="/about" className='font-medium rounded-3xl hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in inline-flex items-center py-2 px-6 bg-orange-500 '>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>
      </div>
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    
    <div className='flex top-4 justify-center py-2 ' >
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          {/* <RxDotFilled /> */}
        </div>
      ))}
    </div>
   
  </div>
  )
}

export default CarouselBanner