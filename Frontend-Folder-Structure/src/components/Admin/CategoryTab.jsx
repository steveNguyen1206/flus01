import React, { useEffect, useState } from 'react';
import './CategoryTab.css';
import { CategoryBlock } from '..';
import categoryService from '@/services/categoryService';
import search from '../../assets/search.png';
import { data } from 'jquery';

const CategoryTab = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.findAllwithSubcate("3");
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="CategoryTab">
      {/* Add search box and Add category button */}
      <div className="search-section">
        {/* Search box */}
        <div className="search-area">
          <div className="text-wrapper">Search Categories</div>
          <img className="search-icon-instance" src={search} />
        </div>
        {/* Add category button */}
        <div className="add-category-button">
          <div className="text-wrapper">Add new category</div>
        </div>
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
