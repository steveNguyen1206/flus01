import React, { useState } from 'react';
import { WhiteButton } from '@/components';
import './bid.css';
import exitButton from '../../assets/exitButton.png';

const BidPopup = () => {
  const [error, setError] = useState({
    name: '',
    skill: '',
    email: '',
    message: '',
    price: '',
    duration: '',
  });

  return (
    <div className="bid-popup">
      <button className="exit-button">
        <img src={exitButton} alt="Exit" />
      </button>
      <div className="bid-popup-header">
        <p>BID</p>
      </div>

      <div className="bid-popup-body">
        <div className="freelancerNameInput">
          <label htmlFor="freelancerName">Freelancer's Name *</label>
          <input
            type="text"
            id="freelancerName"
            name="freelancerName"
            placeholder="Enter name ..."
          />
          <div className="error-message">{error.name}</div>
        </div>
        <div className="freelancer-skill-input">
          <label htmlFor="freelancerSkill">Skill *</label>
          <input
            type="text"
            id="freelancerSkill"
            name="freelancerSkill"
            placeholder="Add skill tag"
          />
          <div className="error-message">{error.skill}</div>
        </div>

        <div className="freelancer-email-input">
          <label htmlFor="freelancerEmail">Email *</label>
          <input
            type="email"
            id="freelancerEmail"
            name="freelancerEmail"
            placeholder="E.g: abc@gmail.com"
          />
          <div className="error-message">{error.email}</div>
        </div>

        <div className="freelancer-message-input">
          <label htmlFor="freelancerMessage">Message *</label>
          <textarea
            type="text"
            id="freelancerMessage"
            name="freelancerMessage"
            placeholder="Enter message ..."
          />
          <div className="error-message">{error.message}</div>
        </div>

        <div className="freelancer-price-input">
          <label htmlFor="freelancerPrice">Price *</label>
          <input
            type="text"
            id="freelancerPrice"
            name="freelancerPrice"
            placeholder="Enter price ..."
          />
          <div className="error-message">{error.price}</div>
        </div>

        <div className="freelancer-duration-input">
          <label htmlFor="freelancerDuration">Duration *</label>
          <input
            type="text"
            id="freelancerDuration"
            name="freelancerDuration"
            placeholder="Enter duration ..."
          />
          <div className="error-message">{error.duration}</div>
        </div>

        <WhiteButton name="Send" />
      </div>
    </div>
  );
};

export default BidPopup;
