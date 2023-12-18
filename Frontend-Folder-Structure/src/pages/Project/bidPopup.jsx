import React from "react";
import "./bidPopup.css";
import { Bid, StarRating } from "@/components";

import BidDetailTag from "@/components/Bid/bidDetail";

const BidPopup = () => {
  return (
    <div className="popup-container-bid">
      <div className="row-wrapper">
        <div className="exit-container">
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
  );
};

export default BidPopup;