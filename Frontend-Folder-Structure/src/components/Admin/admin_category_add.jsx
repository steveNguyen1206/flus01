import React from 'react';
import './admin_category_add.css';
import exitButton from '../../assets/exitButton.png';
import categoryService from '@/services/categoryService';
import { useState } from 'react';

const AddCategory = ({ m_state, m_function, fetchFunction }) => {
  const [categoryName, setCategoryName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddCategory = (event) => {
      // call api to add category
      const data = {
          name: categoryName,
        };
        console.log(data);
    categoryService
      .create(data)
      .then((response) => {
        console.log(response.data);

        // close the popup
        m_function(false);

        // refresh the page
        fetchFunction();
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage(e.response.data.message); 
      });
  };

  const handleCloseIconClick = () => {
    m_function(false);
  };

  const handleCategoryNameChange = (event) => {
    // remove invalid space in the input
    setCategoryName(event.target.value.trim());
    console.log(categoryName);
  };

  return (
    <div className="cate-main-container">
      <div className="pop-up-add-category">
        <div className="addcategory-wrapper">
          <div className="navigation">
            <div className="header-popup-text">New category</div>
            <img
              className="close-icon"
              src={exitButton}
              onClick={handleCloseIconClick}
            />
          </div>

          <div className="cate-info-field">
            {/* <div className="input-container">
                            <label for="inputCategory" class="form-label">
                                Category Name
                            </label>
                            <select class="form-select" aria-label="Category Select">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            
                        </div> */}
            <div className="input-container">
              <label for="inputCategory" class="form-label">
                Category Name
              </label>
              <input
                id="inputCategory"
                name="categoryName"
                type="text"
                class="form-control"
                aria-label="CategoryName"
                aria-describedby="basic-addon1"
                onChange={handleCategoryNameChange}
              />
            </div>

            <div className="add-category-button" onClick={handleAddCategory}>
              <div className="div-wrapper">Add</div>
            </div>

            <div className="err-mesage"> {errorMessage} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
