import React, {useState, useRef, useEffect} from "react";
import "./bidDetailTag.css";
import flag from "../../assets/vietnam.png";
import avatar from "../../assets/avatar_green.png";
import { StarRating } from "@/components";

const BidDetailTag = () => {
    const [expanded, setExpanded] = useState(false);
    const [showSeeMore, setShowSeeMore] = useState(false);
    const textContainerRef = useRef(null);

    useEffect(() => {
        const textContainer = textContainerRef.current;
        if (textContainer.scrollHeight > textContainer.clientHeight) {
            setShowSeeMore(true);
        } else {
            setShowSeeMore(false);
        }
    }, []);

    const handleSeeMoreClick = () => {
        setExpanded(!expanded);
    };

    const textContainerStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: expanded ? 'unset' : 5,
        WebkitBoxOrient: 'vertical',
    };

    return (
        <div className="bid-contain">
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
                <div className="detail-text-container" style={textContainerStyle} ref={textContainerRef}>
                    {/* <Collapse in={expanded}> */}
                    <div>
                        <span className="span" id="collapseSummary" >
                            BID.MESSAGE. No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos
                            tailored to your brand. Make a great first impression with a professional, high-end design. With 20+
                            years of design and branding experience, I can make you and your brand look good.... No logo? Bad logo?
                            Ugly logo? Don’t stress! I’ve got you covered with high-quality, unique logos tailored to your brand..
                        </span>
                        <div className="row" style={{ marginTop: "12px" }}>
                            <div className="col date-offer">Start Date: </div>
                            <div className="col date-text">11/12/2023 BID.START </div>
                            <div className="col date-offer">End Date: </div>
                            <div className="col date-text">22/3/2232 BID.END </div>
                        </div>
                    </div>
                    {/* </Collapse> */}

                </div>
                {showSeeMore && (
                    <a
                        className="text-wrapper-3"
                        role="button"
                        aria-expanded={expanded}
                        onClick={handleSeeMoreClick}
                    >
                        {expanded ? 'See Less' : 'See More'}
                    </a>
                )}
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

export default BidDetailTag;