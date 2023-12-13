import React from "react";
import "./userRow.css";
import recycleBin from "../../assets/recycleBin.png";
import banUser from "../../assets/banUser.png";
import eyeLight from "../../assets/eyeLight.png";

const UserRow = ({ user, handleDeleteUser }) => {
    return(
        <div className="group-wrapper">

            <div className="rows">
                
                <img className="ellipse" alt="Ellipse" src="ellipse-12.png" />
                <div className="text-wrapper-7">Duy-Khang Ho</div>
                <div className="text-wrapper-8">User1234</div>
                <div className="text-wrapper-9">11/6/2023</div>
                <div className="text-wrapper-10">2</div>
                <img className="vector-wrapper" src={banUser}/>
                <img className="recycle-bin" alt="Recycle bin" src={recycleBin} />
                <img className="eye-light" src={eyeLight}/>
            </div>
        </div>
    );
};

export default UserRow;