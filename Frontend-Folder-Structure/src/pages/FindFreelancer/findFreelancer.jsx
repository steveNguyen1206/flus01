import React, { useState } from 'react';
import './findFreelancer.css';
import Search from '@/components/Search';
import { Header, Footer } from '@/layout';
import Post from '@/components/JobPost/Post';
import Filter from '@/components/Filter';
import { FreelancerPost } from '@/components/JobPost';

const FindFreelancer = () => {
  return (
    <>
      <div className="job-page">
        <div className="content">
          <div className="containerp">
            <div className="topbar">
              <div className="button">
                <button className="btn-new-post" onClick={event =>  window.location.href='/createFreelancerPost'}>+ New Post</button>
              </div>
              <Search />
              <select className="sort">
                <option value="" disabled defaultValue>
                  Sort
                </option>
                <option value="price">Price</option>
                <option value="review">Review</option>
              </select>
            </div>
          </div>
        </div>

        <div className="c-container">
          <div className="left-job">
            <Filter />
          </div>
          <div className="right-job">
            <FreelancerPost />
            <FreelancerPost />
            <FreelancerPost />
            <FreelancerPost />
            <FreelancerPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default FindFreelancer;
