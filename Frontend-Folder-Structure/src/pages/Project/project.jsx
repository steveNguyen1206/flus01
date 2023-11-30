import React from 'react';

const Project = () => {
  return (
    <div className="project">
      <div className="left-project">
        <div className="main-post">
          <div className="proj-title"></div>
          <div className="tags"></div>
          <div className="proj-post">
            <div className="proj-poster"></div>
            <div className="proj-body"></div>
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
        <div className="job-profile"></div>
        <div className="post-info"></div>
        <div className="bid-info"></div>
      </div>
    </div>
  );
};

export default Project;
