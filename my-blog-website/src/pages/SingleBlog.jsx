import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

const SingleBlog = () => {
  const data = useLoaderData();
  
  const {title, image, category, author, published_date, reading_time, content} = data[0];
  return (
    <div>
      {/* blog details */}
      <div className='max-w-7xl mx-auto my-12 pt-20 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt="" className='w-full mx-auto rounded' />
          </div>
          <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}</p>
          <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2' /> {reading_time}</p>
          <p className='text-base text-gray-500 mb-6'>{content}</p>
          <div className='text-base text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui fugit voluptatem velit excepturi sit libero quod fuga dolor architecto ducimus doloribus alias iusto dolorum nisi, quia a debitis ab.</p> <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab culpa quia tempora explicabo. Eum, nobis sapiente ipsa necessitatibus, possimus dolorem corrupti non omnis corporis voluptatem deleniti sed ea porro.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit unde similique nemo minus a consequuntur, aperiam expedita id illum, modi quisquam labore dignissimos ipsum ducimus recusandae sunt veritatis. Vel.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui fugit voluptatem velit excepturi sit libero quod fuga dolor architecto ducimus doloribus alias iusto dolorum nisi, quia a debitis ab.</p> <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab culpa quia tempora explicabo. Eum, nobis sapiente ipsa necessitatibus, possimus dolorem corrupti non omnis corporis voluptatem deleniti sed ea porro.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit unde similique nemo minus a consequuntur, aperiam expedita id illum, modi quisquam labore dignissimos ipsum ducimus recusandae sunt veritatis. Vel.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui fugit voluptatem velit excepturi sit libero quod fuga dolor architecto ducimus doloribus alias iusto dolorum nisi, quia a debitis ab.</p> <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab culpa quia tempora explicabo. Eum, nobis sapiente ipsa necessitatibus, possimus dolorem corrupti non omnis corporis voluptatem deleniti sed ea porro.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit unde similique nemo minus a consequuntur, aperiam expedita id illum, modi quisquam labore dignissimos ipsum ducimus recusandae sunt veritatis. Vel.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui fugit voluptatem velit excepturi sit libero quod fuga dolor architecto ducimus doloribus alias iusto dolorum nisi, quia a debitis ab.</p> <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ab culpa quia tempora explicabo. Eum, nobis sapiente ipsa necessitatibus, possimus dolorem corrupti non omnis corporis voluptatem deleniti sed ea porro.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit unde similique nemo minus a consequuntur, aperiam expedita id illum, modi quisquam labore dignissimos ipsum ducimus recusandae sunt veritatis. Vel.</p>
          </div>
        </div>
        {/* latest post */}
        <div className='lg:w-1/2'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default SingleBlog