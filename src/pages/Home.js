import React , {useState} from 'react'
import Header from '../components/Header'
import SearchBar from '../components/Searchbar'
import BlogList from '../components/BlogList'
import {blogList} from '../config/data'
import EmptyList from '../components/EmptyList'

// 
const Home = () => {
  const [blogs , setBlogs] = useState(blogList)
  const [searchKey , setSearchKey] = useState('')


   // Search submit
   const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

    // Search for blog by category
    const handleSearchResults = () => {
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);
    };

      // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };


  return (
    <div>
      {/* page header */}

     <Header/>
      {/* searchbar */}
    <SearchBar  
             value={searchKey}
             clearSearch={handleClearSearch}
             formSubmit={handleSearchBar}
             handleSearchKey={(e) => setSearchKey(e.target.value)}
    />

      {/* blolist & emptylist */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

    </div>
  )
}

export default Home
