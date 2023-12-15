import React from "react";
import "./userRow.css";
import recycleBin from "../../assets/recycleBin.png";
import banUser from "../../assets/banUser.png";
import eyeLight from "../../assets/eyeLight.png";
import avatar_green from "../../assets/avatar_green.png";
import userDataService from "../../services/userDataServices";

const UserRow = ({ user, refreshUsers, setRefreshUsers }) => {
    const { avt_url, profile_name, account_name, createdAt, reported_times } = user;
    const date = new Date(createdAt);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const avatarSrc = avt_url === "https://imgur.com/gallery/ApNKGxs" ? avatar_green : avt_url;

    const handleRemoveUser = () => {
        console.log("Remove user: ", account_name);
        userDataService.removeUserByAccName(account_name).then((response) => {
            setRefreshUsers((prev) => !prev);
        }).catch((error) => {
            console.error(error);
        });
    };

    return(
        <div className="group-wrapper">
            <div className="rows row">
                <div className="ava col-1">
                    <img className="ellipse" alt="avatar" src={avatarSrc} />
                </div>
                <div className="text-wrapper-7 col-3 name">{account_name}</div>
                <div className="text-wrapper-7 col-3 name">{profile_name}</div>
                <div className="text-wrapper-7 col-1">{reported_times}</div>
                <div className="text-wrapper-7 col">{formattedDate}</div>
                <div className="col">
                    <img className="vector-wrapper" src={banUser} />
                    <img className="recycle-bin" alt="Recycle bin" src={recycleBin} onClick={handleRemoveUser}  />
                    <img className="eye-light" src={eyeLight}/>
                </div>
                
            </div>
        </div>
    );
};

export default UserRow;