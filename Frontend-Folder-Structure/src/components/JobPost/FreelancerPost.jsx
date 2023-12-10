import React from 'react';
import './FreelancerPost.css';
import vietnam from '../../assets/vietnam.png';
import profileimage from '../../assets/profile_image.png';
import { StarRating } from '..';

const FreelancerPost = () => (
  <div className="post-container">
    <div className="left-post">
      <div className="pheader">
        <div className="pprofile">
          <img src={profileimage} alt="profile" />
          <div className="pname">Nguyen Thi Truc </div>
          <div className="pusername">(cogai20)</div>
          <div className="plocation">
            <img src={vietnam} alt="vietnam" />
          </div>
        </div>
        <div className="ptitle">
          SEO, Link Building, Marketing, Google Adwords, WordPress
        </div>
        <div className="tag">UI/UX</div>
      </div>
      <div className="details">
        <div className="detail-header">Detail text here everyone.</div>
        <div className="detail">
          Hello everyone, my name is Duy Khang Ho. This job is hard... Detail
          text here everyone text here everyone Hello everyone, my name is Duy
          Khang Ho. This job is hard... Detail text here ever... Detail text
          here everyone text here everyone Hello everyone, my name is Duy Khang
          Ho.
        </div>
      </div>
    </div>

    <div className="right-post">
      <div className="previews">
        <div className="rating">
          <p>4.5</p>
          <StarRating rating={4.5} className="pstars" />
        </div>
        <div className="num-reviews">
            2345 reviews
        </div>

        
      </div>
      <div className="pbid">
        <div className="pprice">$500 - 700</div>
        <div className="btn-p">
          <div className="btn-bid">
            <button>Hire me</button>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default FreelancerPost;
