import React from 'react';
import './Post.css';
import vietnam from '../../assets/vietnam.png';
import profileimage from '../../assets/profile_image.png';
import stars from '../../assets/stars.png';
import heart from '../../assets/heart-active.png';
const Post = () => (
  <div className="post-container">
    <div className="left">
      <div className="header">
        <div className="profile">
          <img src={profileimage} alt="profile" />
          <div className="name">Nguyen Thi Truc </div>
          <div className="username">(cogai20)</div>
          <div className="location">
            <img src={vietnam} alt="vietnam" />
          </div>
        </div>
        <div className="title">
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

    <div className="right">
      <div className="reviews">
        <div className="stars">
          <label>4.5</label>
          <img src={stars} alt="stars" />
        </div>
        <div className="review">
          <label>2345 reviews</label>
        </div>
      </div>
      <div className="bid">
        <div className="price">$500 - 700</div>
        <div className="btn-p">
          <div className="btn-bid">
            <button>Bid</button>
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

export default Post;
