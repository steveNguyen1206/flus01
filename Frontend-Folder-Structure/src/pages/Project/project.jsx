import React from 'react';
import vietnam from '../../assets/vietnam.png';
import profileimage from '../../assets/profile_image.png';
import heart from '../../assets/heart-active.png';
import './project.css';
import { StarRating } from '@/components';
import img from '../../assets/Imgs.png';
import dollar from '../../assets/dollars.png';
import location from '../../assets/location.png';
import delivery from '../../assets/delivery.png';
import WhiteButton from '@/components/Button/WhiteButton';
import line from '../../assets/line.png';
import Comment from '@/components/Comment/Comment';
import { Bid } from '@/components';
import RelatedProject from '@/components/RelatedProject/RelatedProject';
import {Carousel} from 'react-bootstrap';
const Project = () => {
  let projectTitle = 'Create a simple ecommerce store in VTEX';

  return (
    <div className="pproject">
      <div className="left-project">
        <div className="main-post">
          <div className="border-proj-title">
            <div className="proj-title">
              <p>{projectTitle}</p>
            </div>
          </div>
          <div className="tags">
            <div className="tag">AI</div>
            <div className="tag">UI/UX</div>
          </div>
          <div className="proj-post">
            <div className="proj-poster">
              <img src={profileimage} alt="profile" />
              <div className="proj-name-rating-left">
                <div className="proj-name-wrapper-left">
                  <div className="proj-name-left">Nguyen Thi Truc </div>
                  <div className="proj-username-left">(cogai20)</div>
                  <div className="proj-location-left">
                    <img src={vietnam} alt="vietnam" />
                  </div>
                </div>
                <div className="proj-rating-left">
                  <StarRating rating={4} />
                  <div className="proj-stars-left">
                    <p>4.0</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="proj-body">
              <div className="proj-detail">
                No logo? Bad logo? Ugly logo? Don't stress! I've got you covered
                with high-quality, unique logos tailored to your brand. Make a
                great first impression with a professional, high-end design.
                With 20+ years of design and branding experience, I can make you
                and your brand look good. Why Should we work together? I
                specialise in developing Brand Identities for new startups and
                companies. I have an adaptive design style that helps me find
                solutions for any personality or business genre.
                <br />
                Why Should we work together? I specialise in developing Brand
                Identities for new startups and companies. I have an adaptive
                design style that helps me find solutions for any personality or
                business genre.
                <div className="wrapper-project-image">
                  <img src={img} alt="img" />
                  <div className="proj-image"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="proj-line">
            <img src={line} alt="line" />
          </div>
        </div>

        <div className="comments">
          <div className="comment-title">
            <p>Comments</p>
            <div className="proj-comment-detail">
              <Comment />
            </div>
          </div>
          <div className="proj-line">
            <img src={line} alt="line" />
          </div>
        </div>

        <div className="related-project-wrapper">
          <div className="related-project-title">
            <p>Related Projects</p>
          </div>

          <div className="related-project-list">
            <Carousel>
              <Carousel.Item>
                <div className="related-project-item">
                  <RelatedProject />
                  <RelatedProject />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="related-project-item">
                  <RelatedProject />
                  <RelatedProject />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="right-project">
        <button className="button-edit">Edit</button>
        <div className="job-profile">
          <div className="right-profile">
            <img src={profileimage} alt="profile" />
            <div className="project-name-wrapper-right">
              <div className="project-name-right">
                <p>Nguyen Thi Truc</p>
              </div>
              <div className="project-username-right">
                <p>(cogai20)</p>
              </div>
              <div className="project-right-stars">
                <StarRating rating={4} />
                <p>4.0</p>
                <div className="project-right-nstars"></div>
              </div>
            </div>
            <div className="project-location-right">
              <img src={vietnam} alt="vietnam" />
            </div>
          </div>

          <div className="project-jobs-right">
            <div className="project-job-right">
              <p>Job</p>
              <p> Your job here</p>
            </div>
            <div className="project-job-right">
              <p>Job</p>
              <p> Your job here</p>
            </div>
            <div className="project-job-right">
              <p>Job</p>
              <p> Your job here</p>
            </div>
          </div>

          <div className="project-right-contact">
            <WhiteButton name="Chat now" />
            <WhiteButton name="View Profile" />
          </div>
        </div>
        <div className="project-info">
          <h4>More about the project</h4>
          <div className="project-detail">
            <div className="project-detail-price">
              <img src={dollar} alt="dollar" />
              <p>500$ - 700$</p>
            </div>
            <div className="project-type">
              <img src={location} alt="location" />
              <p>Remote project</p>
            </div>
            <div className="project-time">
              <img src={delivery} alt="delivery" />
              <p>5 Day Delivery</p>
            </div>
          </div>

          <div className="btn-bid-and-wish">
            <button className="button-bid-project">Bid</button>
            <button className="button-wish-project">
              <img src={heart} alt="heart" />
            </button>
          </div>
        </div>
        <div className="project-bid-list-info">
          <div className="view-detail">
            <p>View details</p>
          </div>
          <p>4 BID</p>
          <div className="proj-bid-list">
            <Bid />
            <Bid />
            <Bid />
            <Bid />
            <Bid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
