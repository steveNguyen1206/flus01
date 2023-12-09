import { useState } from 'react';
import './bid.css';
import profileImage from '../../assets/profile_image.png';

function Bid() {
  const Name = 'Nguyen Thi Truc';
  const userName = 'Cogai20';

  return (
    <div className="bid">
      <div className="bid-header">
        <div className="image-profile">
          <img src={profileImage} alt="profile" />
        </div>
        <div className="bid-username">
          <h5>{Name}</h5>
          <p>({userName})</p>
        </div>
        <div className="bid-rating">
          <p>4.5</p>
        </div>
      </div>
      <div className="bid-price">
        <p>Price</p>
      </div>
      <div className="bid-button">
      <button className="reject">Reject</button>
        <button className="accept">Accept</button>
      </div>
    </div>
  );
}

export default Bid;
