import React from "react";
import "./CategoryBlock.css";
import editIcon from '../../assets/editProfileIcon.png';

const CategoryBlock = ({category}) => {
    // {
    //         "id": 1,
    //         "name": "Cate 1",
    //         "createdAt": "2023-12-16T04:50:57.000Z",
    //         "updatedAt": "2023-12-16T04:50:57.000Z",
    //         "subcategories": [
    //             {
    //                 "id": 3,
    //                 "subcategory_name": "subcat 3"
    //             },
    //             {
    //                 "id": 2,
    //                 "subcategory_name": "subcat 2"
    //             },
    //             {
    //                 "id": 1,
    //                 "subcategory_name": "subcat 1"
    //             }
    //         ]
    //     },
    const name = category.name;
    const num_subcat = category.subcategories.length;
    const list_subcat = category.subcategories;

    return(
        <div className="row category-wrapper">
            {/* Add name and pencil here */}
            <div className="name-wrapper">
                <div className="name">{name}</div>
                <img className="pencil-icon" src={editIcon} />
            </div>

            {/* Add total subcat on the right */}
            <div className="subcat-num-wrapper">
                <div className="subcat-num">Total: {num_subcat}</div>
            </div>

            {/* Add list subcat */}
            <div className="subcat-list">
                {list_subcat.map((subcat) => (
                    <div className="subcat-wrapper">
                        <div className="subcat-name">{subcat.subcategory_name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBlock;