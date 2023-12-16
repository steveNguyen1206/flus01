import React, { useEffect, useState } from 'react';
import './CategoryTab.css';
import { CategoryBlock } from '..';
import categoryService from '@/services/categoryService';
import search from '../../assets/search.png';
import { data } from 'jquery';

const CategoryTab = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     name: 'Category 1',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'Category 2',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: 'Category 3',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: 'Category 4',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: 'Category 5',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: 'Category 6',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: 'Category 7',
  //     num_subcat: 2,
  //     list_subcat: [
  //       {
  //         id: 1,
  //         name: 'Subcategory 1',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //       {
  //         id: 2,
  //         name: 'SubcategorySubcategory 2',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
  //       {
  //         id: 2,
  //         name: 'Subcategory 2',
  //       },
        
  //     ],
  //   },
  // ];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.findAllwithSubcate();
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
