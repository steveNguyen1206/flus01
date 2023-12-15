import React from 'react';
import './Post.css';
import vietnam from '../../assets/vietnam.png';
import heart from '../../assets/heart-active.png';
import { StarRating } from '..';
import getOwnerProject from '../../services/projectServices';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import getRating from '../../services/authServices';

const Post = ({
  projectId,
  projectTitle,
  projectTags,
  projectDetail,
  projectBudget,
}) => {
  // first, get owner project
  const [ownerProject, setOwnerProject] = useState([]);

  useEffect(() => {
    fetchOwnerProject();
  }, [projectId]);

  const fetchOwnerProject = async () => {
    try {
      const ownerProjectData = await getOwnerProject(projectId);
      setOwnerProject(ownerProjectData);
    } catch (error) {
      console.error('Error fetching owner project:', error);
    }
  };

  let owner = {
    account_name: '',
    avt_url: '',
    profile_name: '',
    rating: '',
  };

  // update owner info
  if (ownerProject) {
    owner.account_name = ownerProject.account_name;
    owner.avt_url = ownerProject.avt_url;
    owner.profile_name = ownerProject.profile_name;
    owner.rating = getRating(ownerProject.rating);
  }

  const handleBidClick = () => {
    console.log('Bid clicked');
  };

  return (
    <div className="post-container">
      <div className="left-post">
        <div className="pheader">
          <div className="pprofile">
            <img src={owner.avt_url} alt="profile" />
            <div className="ptname">{owner.account_name}</div>
            <div className="ptusername">({owner.profile_name})</div>
            <div className="pplocation">
              <img src={vietnam} alt="vietnam" />
            </div>
          </div>

          <div className="pttitle">{projectTitle}</div>

          <div className="pttags">
            {projectTags.map((tag) => (
              <div className="pttag">{tag}</div>
            ))}
          </div>
        </div>
        <div className="details">
          <div className="detail-header"></div>
          <div className="detail">
            <div className="pdetail">{projectDetail}</div>
          </div>
        </div>
      </div>

      <div className="right-post">
        <div className="previews">
          <div className="rating">
            <p>{owner.rating}</p>
            <StarRating rating={parseFloat(owner.rating)} className="pstars" />
          </div>
        </div>
        <div className="pbid">
          <div className="pprice">
            ${`${projectBudget[0]} - ${projectBudget[1]}`}
          </div>
          <div className="btn-p">
            <div className="btn-bid">
              <button onClick={handleBidClick}>Bid</button>
            </div>
            <div className="wish">
              <button>
                <img src={heart} alt="heart icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
