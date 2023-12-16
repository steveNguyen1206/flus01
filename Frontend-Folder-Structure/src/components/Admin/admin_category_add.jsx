import React from "react";
import './admin_category_add.css';
import exitButton from '../../assets/exitButton.png';

const AddCategory = ({m_state,m_function}) => {
    const handleCloseIconClick = () => {
        m_function(false);
    };

    return (
        <div className="cate-main-container">
            <div className="pop-up-add-category">
                <div className="addcategory-wrapper">
                    <div className="navigation">
                        <div className="header-popup-text">Add Tag</div>
                        <img className="close-icon" src={exitButton} onClick={handleCloseIconClick} />
                    </div>

                    <div className="cate-info-field">
                        <div className="input-container">
                            <label for="inputCategory" class="form-label">
                                Category
                            </label>
                            <select class="form-select" aria-label="Category Select">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            
                        </div>
                        <div className="input-container">
                            <label for="inputCategory" class="form-label">
                                SubCategory
                            </label>
                            <input
                                id="inputSubCategory"
                                name="subcategoryName"
                                type="text"
                                class="form-control"
                                aria-label="SubCategoryName"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        

                        <div className="add-category-button">
                            <div className="div-wrapper">
                                Add
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddCategory;