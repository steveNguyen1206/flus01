import { useState } from 'react';
import './bid.css';
import profileImage from '../../assets/profile_image.png';
//name, skill, message, price, duration, accept, reject

const BidOffer = ({ bidOne }) => {
  // const uname = 'Nguyen Thi Truc';
  // const userName = 'cogai20';
  // const price = '100$';
  const skill = 'React, NodeJS';
  // const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit iyrey ifhiu ewuyriu odfiuh o.';
  // const duration = '5 days';

  // const bidOne = {
  //   "id": 2,
  //   "client_name": "Vy Vy",
  //   "client_company": "ZyZy",
  //   "job_name": "Software",
  //   "job_description": "You have to do software for me",
  //   "start_date": "2020-12-31",
  //   "end_date": "2024-01-20",
  //   "budget": 3000,
  //   "status": 0,
  //   "project_id": 1,
  //   "createdAt": "2023-12-21T14:17:03.000Z",
  //   "updatedAt": "2023-12-21T14:17:03.000Z",
  //   "freelancer_post_id": 3,
  //   "client_id": 1,
  //   "user": {
  //     "id": 1,
  //     "account_name": "hoavienvohoang",
  //     "profile_name": "Vo Hoang Hoa Vien",
  //     "avt_url": "https://res.cloudinary.com/dunbnutmw/image/upload/v1703227364/gqxx79jsybefqcvqcop2.jpg",
  //     "email": "vohoanghoavien@gmail.com"
  //   }
  // }

  const accept = () => {
    console.log('accept');
  };

  const reject = () => {
    console.log('reject');
  };

  return (
    <div className="bid">
      <div className="bid-header">
        <div className="image-profile">
          {/* <img src={profileImage} alt="profile" /> */}
          <img src={bidOne.user.avt_url} alt="profile" />
        </div>
        <div className="bid-username">
          {/* <h5>{uname}</h5> */}
          <h5>{bidOne.user.profile_name}</h5>
          <p style={{ color: 'green' }}>{skill}</p>
        </div>
        <div style={{outerHeight: '8px'}}>
            <div className="bid-rating">
            <p>4.5</p>
            </div>
        </div>

      </div>
      <div className="bid-body-detail">
        <div className="bid-price">
          <p>{bidOne.budget}$</p>
        </div>
      </div>

      <div className="bid-button">
        <button className="reject" onClick={reject}>
          Reject
        </button>
        <button className="accept" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default BidOffer;