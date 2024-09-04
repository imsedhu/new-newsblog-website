import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12 // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      //filter by category
      if(selectedCategory){
        url +=`&category=${selectedCategory}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setBlogs(data);
    }

    fetchBlogs();
    
  },[currentPage, pageSize, selectedCategory])

  //page chaging btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  const handleCategoryChnage = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div >
      {/* category sectiom */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChnage} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>

      {/* bolgs cards section */}
      <div className='flex flex-col lg:flex-row gap-12'>
        {/* blog cards component */}
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

        {/* siderbar component */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>
    </div>

  )
}

export default BlogPage