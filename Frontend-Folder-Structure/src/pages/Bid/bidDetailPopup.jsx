import React from "react";
import "./bidDetailPopup.css";
import { Bid, StarRating } from "@/components";

import BidDetailTag from "@/components/Bid/bidDetailTag";

const BidDetailPopup = ({setPopUpAppear}) => {
  
  const handleExitClick = () => {
    setPopUpAppear(false);
  };

  return (
    <div className="popup-container-background">
      <div className="popup-container-bid">
        <div className="row-wrapper">
          <div className="exit-container" onClick={handleExitClick}>
            <div className="text-wrapper">x</div>
          </div>
        </div>
          
          <div className="div-wrapper">
            <div className="text-wrapper-title">Applications</div>
          </div>
          <div className="avg">
            <div className="text-wrapper-2">4 BID</div>
          </div>
          
          <div className="bid-container">
            <BidDetailTag/>
            <BidDetailTag/>
            <BidDetailTag/>
            <BidDetailTag/>
          </div>
      </div>
    </div>
    
  );
};

export default BidDetailPopup;