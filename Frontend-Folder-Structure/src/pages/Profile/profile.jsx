import React from 'react'
import './profile.css'
import profileCover from '../../assets/profile_cover.jpg'
import avatar from '../../assets/avatar_green.png'
import facebookicon from '../../assets/SocialIcon/facebook.png'
import instaicon from '../../assets/SocialIcon/insta.png'
import linkedinicon from '../../assets/SocialIcon/linkedin.png'
import editIcon from '../../assets/editProfileIcon.png'
import { EmptyTab, StarRating, Tag } from '@/components'
import { SignUp } from '@/pages'

const profile = () => {
    return(
        <div className="profile">
            <SignUp/>
            <div className="overlap">
                <div className="profile-info-section">
                    <div className="cover-avatar-section">
                        <img className="rectangle" alt="Rectangle" src={profileCover} />
                        <div className='avatar-container'>
                            <img className="ellipse" alt="Ellipse" src={avatar} />
                        </div>
                        
                    </div>
                    <div className="information-section">
                        <div className="frame">
                            <p className="name-section">
                                <span className="text-wrapper">Nguyễn Thị Trúc </span>
                                <span className="span">(cogai20)</span>
                                <div className='edit-container' style={{display:"flex", alignItems:"center"}}>
                                    {/* <span style={{fontSize:"16px", marginRight:"10px"}}>Edit</span> */}
                                    <img className="image" alt="edit profile" src={editIcon} />
                                </div>
                                
                            </p>
                            <div className="text-wrapper-2">Junior FullStack Developer</div>
                        </div>
                        
                        <div className="row social-row">
                            <div className='col '>
                                <img className="img" alt="Ellipse" src={facebookicon} />
                                <div className="text-wrapper-3">TrucVy</div>
                            </div>
                            <div className='col'>
                                <img className="img" alt="Ellipse" src={instaicon} />
                                <div className="text-wrapper-3">TrucVy</div>
                            </div>
                            <div className='col'>
                                <img className="img" alt="Ellipse" src={linkedinicon} />
                                <div className="text-wrapper-3">TrucVy</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="rating-bar">
                        <StarRating rating={4.6}/>
                        <div className="text-wrapper-6">4.6</div>
                    </div>
                    
                </div>
                
            </div> 
            <div className="overlap-5">
                <div className="overlap-wrapper">
                <div className="overlap-6">
                    <div className="frame-2">
                    <div className="text-wrapper-7">My Job Tags:</div>
                    <div className="tag-box">
                        <div className="tag-box-inner">
                            <Tag string={"Web Developer"}/>
                            <Tag string={"Web"}/>
                            <Tag string={"Web Design"}/>
                            <Tag string={"Chief of Technology"}/>
                            <Tag string={"Chief of Technology"}/>
                            <Tag string={"Chief of Technology"}/>
                        </div>
                    </div>
                    </div>
                    <div className="overlap-10">
                        <div className="rectangle-2" />
                        <div className='tab-container'>
                            <div className="group-6 active">
                                <div className="text-wrapper-11">My Jobs</div>
                            </div>
                            <div className="group-6">
                                <div className="text-wrapper-11">My Offers</div>
                            </div>
                            <div className="group-6">
                                <div className="text-wrapper-11">My Wishlist</div>
                            </div>
                            <div className="group-6">
                                <div className="text-wrapper-11">My Calendar</div>
                            </div>
                            <div className="group-6">
                                <div className="text-wrapper-11">My Payment Account</div>
                            </div>
                        </div>
                        <div className='main-tab-container'>
                            <EmptyTab/>
                        </div>
                    
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
}
export default profile