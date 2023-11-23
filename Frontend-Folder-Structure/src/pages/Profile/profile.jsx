import React from 'react'
import './profile.css'
import profileCover from '../../assets/profile_cover.jpg'
import avatar from '../../assets/avatar_green.png'
import facebookicon from '../../assets/SocialIcon/facebook.png'
import instaicon from '../../assets/SocialIcon/insta.png'
import linkedinicon from '../../assets/SocialIcon/linkedin.png'
import editIcon from '../../assets/editProfileIcon.png'
import { EmptyTab, StarRating } from '@/components'

const profile = () => {
    return(
        <div className="profile">
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
                    <div className="overlap-7">
                        <div className="overlap-group-wrapper">
                        <div className="overlap-rating-bar">
                            <div className="ellipse-4" />
                            <div className="text-wrapper-8">Web Design</div>
                        </div>
                        </div>
                        <div className="div-wrapper">
                        <div className="overlap-rating-bar">
                            <div className="ellipse-4" />
                            <div className="text-wrapper-8">Photography</div>
                        </div>
                        </div>
                        <div className="group-3">
                        <div className="overlap-8">
                            <div className="ellipse-4" />
                            <div className="text-wrapper-9">Backend Development</div>
                        </div>
                        </div>
                        <div className="group-4">
                        <div className="overlap-9">
                            <div className="text-wrapper-10">Bakery</div>
                        </div>
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
                        <EmptyTab/>
                    
                    {/* <div className="scroll-bar">
                        <div className="rectangle-3" />
                    </div> */}
                    
                    {/* <div className="ctn-post">
                        <div className="overlap-15">
                        <div className="img-2">
                            <div className="overlap-group-3">
                            <div className="text-wrapper-12">Image</div>
                            </div>
                        </div>
                        <div className="gr-tags">
                            <div className="gr">
                            <div className="overlap-group-4">
                                <div className="text-wrapper-13">AI</div>
                            </div>
                            </div>
                            <div className="gr-tag">
                            <div className="overlap-12">
                                <div className="text-wrapper-14">UI/UX</div>
                            </div>
                            </div>
                        </div>
                        <p className="detail-text"> Detail text here hjhjhjhj <br /> Hello everyone, my name is Duy Khang Ho. This job is hard... </p>
                        <div className="gr-title">
                            <div className="overlap-13">
                            <p className="p">This is a long header / title ...</p>
                            </div>
                        </div>
                        <div className="budget">$500-700</div>
                        <div className="group-11">
                            <div className="overlap-14">
                            <div className="text-wrapper-15">Go to Project</div>
                            </div>
                        </div>
                        </div>
                        <div className="ctn-2">
                        <div className="overlap-11">
                            <div className="img-2">
                            <div className="overlap-group-3">
                                <div className="text-wrapper-12">Image</div>
                            </div>
                            </div>
                            <div className="gr-tags">
                            <div className="gr">
                                <div className="overlap-group-4">
                                <div className="text-wrapper-13">AI</div>
                                </div>
                            </div>
                            <div className="gr-tag">
                                <div className="overlap-12">
                                <div className="text-wrapper-14">UI/UX</div>
                                </div>
                            </div>
                            </div>
                            <p className="detail-text"> Detail text here hjhjhjhj <br /> Hello everyone, my name is Duy Khang Ho. This job is hard... </p>
                            <div className="gr-title">
                            <div className="overlap-13">
                                <p className="p">This is a long header / title ...</p>
                            </div>
                            </div>
                            <div className="budget">$500-700</div>
                            <div className="group-11">
                            <div className="overlap-14">
                                <div className="text-wrapper-15">Go to Project</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </div>
                </div>
                </div>
                {/* <div className="ctn-3">
                <div className="overlap-11">
                    <div className="img-2">
                    <div className="overlap-group-3">
                        <div className="text-wrapper-12">Image</div>
                    </div>
                    </div>
                    <div className="gr-tags">
                    <div className="gr">
                        <div className="overlap-group-4">
                        <div className="text-wrapper-13">AI</div>
                        </div>
                    </div>
                    <div className="gr-tag">
                        <div className="overlap-12">
                        <div className="text-wrapper-14">UI/UX</div>
                        </div>
                    </div>
                    </div>
                    <p className="detail-text"> Detail text here hjhjhjhj <br /> Hello everyone, my name is Duy Khang Ho. This job is hard... </p>
                    <div className="gr-title">
                    <div className="overlap-13">
                        <p className="p">This is a long header / title ...</p>
                    </div>
                    </div>
                    <div className="budget">$500-700</div>
                    <div className="group-11">
                    <div className="overlap-14">
                        <div className="text-wrapper-15">Go to Project</div>
                    </div>
                    </div>
                </div>
                </div> */}
            </div>
        </div>
    );
}
export default profile