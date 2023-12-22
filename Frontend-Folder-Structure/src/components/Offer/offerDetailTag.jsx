import React from "react";
import "./offerDetailTag.css";
import flag from "../../assets/vietnam.png";
import avatar from "../../assets/avatar_green.png";
import { StarRating } from "@/components";

const OfferDetailTag = () => {
    return (
        <div className="offer">
            <div className="overlap">
            <div className="row" style={{height:"100%", width:"100%", alignItems:"flex-start"}}>
                <div className="col" style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                <div className="group row">
                    <div className="col-3" style={{display:"flex", justifyContent:"center"}}>
                    <img className="rectangle" alt="Rectangle" src={avatar} />
                    </div>
                    <div className="name-container col">
                        <div className="first-line-container row">
                        <div className="text-wrapper-5">
                            Nguyen Thi Truc
                        </div>
                        <div className="flag-container" >
                            <img className="rectangle-2" alt="Rectangle" src={flag} />
                        </div>
                        
                        </div>
                        <span className="text-wrapper-6">(cogai20)</span>

                    <div className="group-2">
                        <StarRating rating={4.6} width={140} />
                        <div className="rating-number">{4.6}</div>
                    </div>
                    </div>
                </div>
                <div className="detail-text-container">
                    <span className="span">
                    No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos
                    tailored to your brand. Make a great first impression with a professional, high-end design. With 20+
                    years of design and branding experience, I can make you and your brand look good.... No logo? Bad logo?
                    Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos tailored to your brand..
                    </span>
                    <span className="text-wrapper-3">See more</span>
                </div>
                </div>
                <div className="col-3">
                <div className="budget-wrapper">$600</div>
                
                <div className="btns">
                    <div className="overlap-group-3">
                    <div className="text-wrapper-7">Accept</div>
                    </div>
                    <div className="overlap-2">
                    <div className="text-wrapper-8">Reject</div>
                    </div>
                </div>
                </div>
            </div>
            
            </div>
      </div>
    );
};

export default OfferDetailTag;