import React from 'react';
import './Comment.css';
import profileimage from '../../assets/profile_image.png';
import vietnam from '../../assets/vietnam.png';
import { StarRating } from '..';

const Comment = () => {
  return (
    <div className="comment">
      <div className="commentator">
        <div className="commentator-info">
          <div className="commentator-image">
            <img src={profileimage} alt="profile" />
          </div>
          <div className="commentator-name">
            <p>cogai20</p>
            <img src={vietnam} alt="vietnam" />
          </div>
        </div>
        <div className="comment-star">
          <StarRating rating={4} />
          <p>4.0</p>
          <div className="comment-time">
            <p>2 days ago</p>
          </div>
        </div>
        <div className="comment-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur autem a deserunt aliquam ex iure debitis quae
            dignissimos culpa! Autem eos quis aperiam possimus magni suscipit
            amet reiciendis, fugit sequi!
          </p>
        </div>
      </div>
      <div className="responder">
        <div className="responder-info">
          <img src={profileimage} alt="profile" />
          <p>cogai20</p>
        </div>

        <div className="responder-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur autem a deserunt aliquam ex iure debitis quae
            dignissimos culpa! Autem eos quis aperiam possimus magni suscipit
            amet reiciendis, fugit sequi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
