import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./userRow.css";
// import recycleBin from "../../assets/recycleBin.png";
// import banIssue from "../../assets/banIssue.png";
// import banIssueActive from "../../assets/banIssue_active.png";
import eyeLight from "../../assets/eyeLight.png";
import avatar_green from "../../assets/avatar_green.png";

const IssueRow = ({ issue, refreshIssues, setRefreshIssues }) => {

    const [ownerProject, setOwnerProject] = useState([]);
  
    useEffect(() => {
      fetchOwnerProject();
    }, [freepostId]);
  
    // get User info from id
    const fetchOwnerProject = async () => {
      try {
        const ownerProjectData = await userDataService.findOnebyId(issue.userId);
        setOwnerProject(ownerProjectData.data);
        // console.log("user data: ",ownerProjectData.data);
      } catch (error) {
        console.error('Error fetching freeposts:', error);
      }
    };
    
    return (
        <div className="free-post-container">
            <div className="left-post">
                <div className="pheader">
                    <div className="pprofile">
                        <img src={ownerProject.avt_url || avatar_green} alt="profile" />
                        <div className="pname">{ownerProject.profile_name} </div>
                        <div className="pusername">({ownerProject.account_name})</div>
                        <div className="plocation">
                            <img src={vietnam} alt="vietnam" />
                        </div>
                    </div>
                </div>
                <div className='content-container'>
                    <div className="ptitle">Project Id: {issue.project_id}</div>
                    <div className="details">
                        <div className="detail-content">
                            {issue.content}
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-post">
                <div className="pbid">
                    <div className="btn-row">
                        <div class="col">
                            {/* <img class="recycle-bin" alt="Recycle bin" src={recycleBin} onClick={handleRemoveProjPost}/>
                            <img className="ban-icon" src={active === 0 ? banUserActive : banUser} onClick={handleChangeStatus} />
                            <img class="eye-light" onClick={handleViewClick} src={eyeLight}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
