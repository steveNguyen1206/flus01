import React, { useEffect, useState } from 'react';
import './CategoryTab.css';
import { CategoryBlock } from '..';
import categoryService from '@/services/categoryService';
import search from '../../assets/search.png';
import { data } from 'jquery';

const CategoryTab = () => {
  const [categories, setCategories] = useState([]);
  const [searchKey, setSearchKey] = useState(''); // State for search key

  const fetchCategories = async () => {
    try {
      const response = await categoryService.findAllwithSubcate(
        searchKey.toString()
      );
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchCategories();
    }
  };

  const handleSearchChange = (event) => {
    setSearchKey(event.target.value);
  };
  useEffect(() => {
    if (searchKey === '') {
      fetchCategories();
    }
  }, [searchKey]);

  return (
    <div className="CategoryTab">
      {/* Add search box and Add category button */}
      <div className="search-section">
        {/* Search box */}
        <div className="search-area">
          <input
            className="text-wrapper"
            type="text"
            placeholder="Search Categories"
            value={searchKey}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyPress}
          />
          <img
            className="search-icon-instance"
            src={search}
            onClick={fetchCategories}
          />
        </div>
        {/* Add category button */}
        <button 
          className="add-category-button"
          // onClick={}
          >
            New category
        </button>
      </div>

      {/* Add category galery here */}
      <div className="category-gallery">
        {categories.map((category) => (
          // console.log(category),
          <CategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryTab;
