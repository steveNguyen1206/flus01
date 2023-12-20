import React, { useState, useEffect } from 'react';
import './FreelancerPost.css';
import vietnam from '../../assets/vietnam.png';
import profileimage from '../../assets/profile_image.png';
import { StarRating } from '..';

const FreelancerPost = ({post}) => {
  return (
  <div className="post-container">
    <div className="left-post">
      <div className="pheader">
        <div className="pprofile">
          <img src={post.user.avt_url} alt="profile" />
          <div className="pname">{post.user.profile_name} </div>
          <div className="pusername">({post.user.account_name})</div>
          <div className="plocation">
            <img src={vietnam} alt="vietnam" />
          </div>
        </div>
        <div className="tag">{post.subcategory.subcategory_name}</div>
      </div>
      <div className="details">
        <div className="detail-header">Detail text here everyone.</div>
        <div className="detail">
          {/* Hello everyone, my name is Duy Khang Ho. This job is hard... Detail
          text here everyone text here everyone Hello everyone, my name is Duy
          Khang Ho. This job is hard... Detail text here ever... Detail text
          here everyone text here everyone Hello everyone, my name is Duy Khang
          Ho. */}
          {post.about_me}
        </div>
      </div>
    </div>

    <div className="right-post">
      <div className="previews">
        <div className="rating">
          <p>4.5</p>
          <StarRating rating={4.5} width={160} className="pstars" />
        </div>
        <div className="num-reviews">
            2345 reviews
        </div>

        
      </div>
      <div className="pbid">
        <div className="pprice">From ${post.lowset_price}</div>
        <div className="btn-p">
          <div className="btn-bid">
            <button>Hire me</button>
          </div>

        </div>
      </div>
    </div>
  </div>
)
  }

export default FreelancerPost;
