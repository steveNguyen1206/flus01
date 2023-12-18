import React from "react";
import "./bidPopup.css";
import { StarRating } from "@/components";

const BidPopup = () => {
  return (
    <div className="popup-container-bid">
      {/* <div className="div"> */}
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
          <div className="bid">
            <div className="overlap">
              <p className="detail-text">
                <span className="span">
                  No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos
                  tailored to your brand. Make a great first impression with a professional, high-end design. With 20+
                  years of design and branding experience, I can make you and your brand look good.... No logo? Bad logo?
                  Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos tailored to your brand..
                </span>
                <span className="text-wrapper-3">See more</span>
              </p>
              <div className="budget">$600</div>
              <div className="group row">
                <img className="rectangle col-1" alt="Rectangle" src="rectangle-3.png" />
                <div className="name-container col">
                  <p className="nguyen-thi-truc">
                    <span className="text-wrapper-5">
                      Nguyen Thi Truc <br />
                    </span>
                    <span className="text-wrapper-6">(cogai20)</span>
                  </p>
                  <div className="group-2">
                    <StarRating rating={4.6} width={140} />
                    <div className="rating-number">{4.6}</div>
                  </div>
                </div>
                <img className="rectangle-2 col" alt="Rectangle" src="rectangle-2849.png" />
                
              </div>
              <div className="btns">
                <div className="accept">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-7">Accept</div>
                  </div>
                </div>
                <div className="reject">
                  <div className="overlap-2">
                    <div className="text-wrapper-8">Reject</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <p className="detail-text">
                <span className="span">
                  No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos
                  tailored to your brand. Make a great first impression with a professional, high-end design. With 20+
                  years of design and branding experience, I can make you and your brand look good.... No logo? Bad logo?
                  Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos tailored to your brand..
                </span>
                <span className="text-wrapper-3">See more</span>
              </p>
              <div className="budget">$500</div>
              <div className="group">
                <img className="rectangle" alt="Rectangle" src="image.png" />
                <div className="group-2">
                  <div className="overlap-group-2">
                    <img className="star" alt="Star" src="image.svg" />
                    <img className="img" alt="Star" src="star-2-2.svg" />
                    <img className="star-2" alt="Star" src="star-3-2.svg" />
                    <img className="star-3" alt="Star" src="star-4-2.svg" />
                  </div>
                  <img className="star-4" alt="Star" src="star-5-2.svg" />
                </div>
                <div className="text-wrapper-4">4.6</div>
                <img className="rectangle-2" alt="Rectangle" src="rectangle-2849-2.png" />
                <p className="nguyen-thi-truc">
                  <span className="text-wrapper-5">
                    Nguyen Thi Truc <br />
                  </span>
                  <span className="text-wrapper-6">(cogai20)</span>
                </p>
              </div>
              <div className="btns">
                <div className="accept">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-7">Accept</div>
                  </div>
                </div>
                <div className="reject">
                  <div className="overlap-2">
                    <div className="text-wrapper-8">Reject</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap">
              <p className="detail-text">
                <span className="span">
                  No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos
                  tailored to your brand. Make a great first impression with a professional, high-end design. With 20+
                  years of design and branding experience, I can make you and your brand look good.... No logo? Bad logo?
                  Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos tailored to your brand..
                </span>
                <span className="text-wrapper-3">See more</span>
              </p>
              <div className="budget">$500</div>
              <div className="group">
                <img className="rectangle" alt="Rectangle" src="rectangle-3-2.png" />
                <div className="group-2">
                  <div className="overlap-group-2">
                    <img className="star" alt="Star" src="star-1-2.svg" />
                    <img className="img" alt="Star" src="star-2-3.svg" />
                    <img className="star-2" alt="Star" src="star-3-3.svg" />
                    <img className="star-3" alt="Star" src="star-4-3.svg" />
                  </div>
                  <img className="star-4" alt="Star" src="star-5-3.svg" />
                </div>
                <div className="text-wrapper-4">4.6</div>
                <img className="rectangle-2" alt="Rectangle" src="rectangle-2849-3.png" />
                <p className="nguyen-thi-truc">
                  <span className="text-wrapper-5">
                    Nguyen Thi Truc <br />
                  </span>
                  <span className="text-wrapper-6">(cogai20)</span>
                </p>
              </div>
              <div className="btns">
                <div className="accept">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-7">Accept</div>
                  </div>
                </div>
                <div className="reject">
                  <div className="overlap-2">
                    <div className="text-wrapper-8">Reject</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-bar">
          <div className="rectangle-3" />
        </div>
      {/* </div> */}
    </div>
  );
};

export default BidPopup;