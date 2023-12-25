import React from 'react';
import './Post.css';
import vietnam from '../../assets/vietnam.png';
import heart from '../../assets/heart-active.png';
import unactiveHeart from '../../assets/heart-unactive.png';
import { StarRating } from '..';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import userDataService from '../../services/userDataServices';
import reviewServices from '../../services/reviewServices';
import categoryServices from '../../services/categoryServices';
import projectPostWishlistServices from '../../services/projectPostWishlistServices';

const Post = ({
  projectId,
  projectTitle,
  projectTagsId,
  projectDetail,
  projectBudget,
  userID,
  handleBidClick,
  ownerRating,
}) => {
  // first, get owner project
  const [ownerProject, setOwnerProject] = useState([]);

  useEffect(() => {
    fetchOwnerProject();
  }, [projectId]);

  // get User info from id
  const fetchOwnerProject = async () => {
    try {
      const ownerProjectData = await userDataService.findOnebyId(userID);
      setOwnerProject(ownerProjectData.data);
      // console.log("user data: ",ownerProjectData.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  // get project tags from id
  const [projectTags, setProjectTags] = useState([]);

  useEffect(() => {
    fetchProjectTags();
  }, [projectTagsId]);

  const fetchProjectTags = async () => {
    const projectTagsData = await categoryServices.getNamefromId(projectTagsId);
    console.log(projectTagsData.data.subcategory_name);

    setProjectTags(projectTagsData.data.subcategory_name);
    // console.log('project tag: ', projectTagsData.data.subcategory_name);
  };

  const [isLiked, setIsLiked] = useState('');

  // check if user liked this project
  useEffect(() => {
    projectPostWishlistServices
      .isExisted(userID, projectId)
      .then((response) => {
        console.log('response: ', response);
        if (response.data === true) {
          setIsLiked(heart);
        } else {
          setIsLiked(unactiveHeart);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userID, projectId]);

  const handleLikeClick = () => {
    if (isLiked === unactiveHeart) {
      projectPostWishlistServices.create(userID, projectId).then((response) => {
        setIsLiked(heart);
        console.log('response: ', response);
      });
    }
    if (isLiked === heart) {
      projectPostWishlistServices.remove(userID, projectId).then((response) => {
        setIsLiked(unactiveHeart);
        console.log('response: ', response);
      });
    }
  };

  return (
    <div className="post-container">
      <div className="left-post">
        <div className="pheader">
          <div className="pprofile">
            {/* {console.log('owner project: ', ownerProject)} */}
            <img src={ownerProject.avt_url} alt="profile" />
            <div className="ptname">{ownerProject.account_name}</div>
            <div className="ptusername">({ownerProject.profile_name})</div>
            <div className="pplocation">
              <img src={vietnam} alt="vietnam" />
            </div>
          </div>

          <div className="pttitle">{projectTitle}</div>

          <div className="pttags">
            <div className="pttag">{projectTags}</div>
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
            <p>{ownerRating}</p>
            <StarRating
              rating={parseFloat(ownerRating)}
              width={100}
              className="pstars"
            />
          </div>
        </div>
        <div className="pbid">
          <div className="pprice">
            ${`${projectBudget[0]} - ${projectBudget[1]}`}
          </div>
          <div className="btn-p">
            <div className="btn-bid-project">
              <button onClick={handleBidClick}>Bid</button>
            </div>
            <div className="wish">
              <button onClick={handleLikeClick}>
                <img src={isLiked} alt="heart icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
