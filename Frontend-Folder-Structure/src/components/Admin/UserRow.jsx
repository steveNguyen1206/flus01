import React from "react";
import "./userRow.css";
import recycleBin from "../../assets/recycleBin.png";
import banUser from "../../assets/banUser.png";
import eyeLight from "../../assets/eyeLight.png";


const UserRow = (user) => {
    const { profile_name, account_name, createdAt, reportedTimes } = user;

    return(
        <div className="group-wrapper">
            <div className="rows row">
                <div className="ava col-1">
                    <img className="ellipse" alt="avatar" src={user.avt_link} />
                </div>
                <div className="text-wrapper-7 col">{profile_name}</div>
                <div className="text-wrapper-7 col">{account_name}</div>
                <div className="text-wrapper-7 col">{createdAt}</div>
                <div className="text-wrapper-7 col">{reportedTimes}</div>
                <div className="col">
                    <img className="vector-wrapper" src={banUser}/>
                    <img className="recycle-bin" alt="Recycle bin" src={recycleBin} />
                    <img className="eye-light" src={eyeLight}/>
                </div>
                
            </div>
        </div>
    );
};

export default UserRow;