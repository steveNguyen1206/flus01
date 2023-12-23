import React from "react";
import "./offerDetailPopup.css";

import OfferDetailTag from "@/components/Offer/offerDetailTag";

const OfferDetailPopup = ({setPopUpAppear}) => {
  
  const handleExitClick = () => {
    setPopUpAppear(false);
  };

  return (
    <div className="popup-container-background">
      <div className="popup-container-offer">
        <div className="row-wrapper">
          <div className="exit-container" onClick={handleExitClick}>
            <div className="text-wrapper">x</div>
          </div>
        </div>
          
          <div className="div-wrapper">
            <div className="text-wrapper-title">Applications</div>
          </div>
          <div className="avg">
            <div className="text-wrapper-2">4 Offer</div>
          </div>
          
          <div className="offer-container">
            <OfferDetailTag/>
            <OfferDetailTag/>
            <OfferDetailTag/>
            <OfferDetailTag/>
          </div>
      </div>
    </div>
    
  );
};

export default OfferDetailPopup;