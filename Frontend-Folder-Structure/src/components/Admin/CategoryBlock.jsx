import React from "react";
import "./CategoryBlock.css";
import editIcon from '../../assets/editProfileIcon.png';

const CategoryBlock = ({category}) => {
    const { name, num_subcat, list_subcat } = category;

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
                        <div className="subcat-name">{subcat.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBlock;