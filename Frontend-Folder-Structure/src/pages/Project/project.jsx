import React from 'react';
import vietnam from '../../assets/vietnam.png';
import profileimage from '../../assets/profile_image.png';
import stars from '../../assets/stars.png';
import heart from '../../assets/heart-active.png';
import './project.css';
import { StarRating } from '@/components';
import img from '../../assets/Imgs.png';

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
              <div className="proj-name-rating">
                <div className="proj-name">
                  <div className="pname">Nguyen Thi Truc </div>
                  <div className="pusername">(cogai20)</div>
                  <div className="plocation">
                    <img src={vietnam} alt="vietnam" />
                  </div>
                </div>
                <div className="proj-rating">
                  <StarRating rating={4} />
                  <p>4.0</p>
                </div>
              </div>
            </div>
            <div className="proj-body">
              <div className="detail">
                {' '}
                No logo? Bad logo? Ugly logo? Don’t stress! I’ve got you covered
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
                <div className="image">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="comment-title">
            <p>Comments</p>
          </div>
        </div>
        <div className="related-project"></div>
      </div>
      <div className="right-project">
        <button className="button-edit">Edit</button>
        <div className="job-profile">
          <div className="right-profile">
            <img src={profileimage} alt="profile" />
            <div className="right-name">
              <div className="r-name">
                <p>Nguyen Thi Truc</p>
              </div>
              <div className="r-username">
                <p>(cogai20)</p>
              </div>
              <div className="right-rating">
                <StarRating rating={4} />
                <p>4.0</p>
              </div>
            </div>
            <div className="r-location">
              <img src={vietnam} alt="vietnam" />
            </div>
          </div>

          <div className="right-jobs">
            <div className="r-job">
              <p>Job</p>
              <p> Your job here</p>
            </div>
            <div className="r-job">
              <p>Job</p>
              <p> Your job here</p>
            </div>
            <div className="r-job">
              <p>Job</p>
              <p> Your job here</p>
            </div>
          </div>
        </div>
        <div className="post-info"></div>
        <div className="bid-info"></div>
      </div>
    </div>
  );
};

export default Project;
