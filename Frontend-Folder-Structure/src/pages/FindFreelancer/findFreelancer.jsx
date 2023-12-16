import React, { useState, useEffect } from 'react';
import './findFreelancer.css';
import Search from '@/components/Search';
import { Header, Footer } from '@/layout';
import Post from '@/components/JobPost/Post';
import Filter from '@/components/Filter';
import { FreelancerPost } from '@/components/JobPost';
import { useNavigate } from 'react-router';

const FindFreelancer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:8080/api/freelancer_post/allposts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // const post ={
  //   "id": 2,
  //   "about_me": "Detail text here everyone. Hello everyone, my name is Duy Khang Ho. This job is hard... Detail text here everyone text here everyone Hello everyone, my name is Duy Khang Ho. This job is hard... Detail text here ever... Detail text here everyone text here everyone Hello everyone, my name is Duy Khang Ho.",
  //   "skill_description": "I am very very skillful",
  //   "lowset_price": 80,
  //   "delivery_due": 3,
  //   "revision_number": 1,
  //   "delivery_description": "This is a delivery description",
  //   "imgage_post_urls": "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Python-Developer-Skills.png",
  //   "createdAt": "2023-12-13T05:10:54.000Z",
  //   "updatedAt": "2023-12-16T02:03:41.000Z",
  //   "skill_tag": 2,
  //   "freelancer_id": 2,
  //   "user": {
  //     "id": 2,
  //     "account_name": "HoaVien",
  //     "profile_name": "HoaVien2003",
  //     "avt_url": "https://i.pinimg.com/564x/fa/00/54/fa0054b302f8ed3ccd829c39e12a19db.jpg"
  //   },
  //   "subcategory": {
  //     "id": 2,
  //     "subcategory_name": "Illustrator"
  //   }
  // }

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
            {/* <FreelancerPost post = {post}/>
            <FreelancerPost post = {post}/>
            <FreelancerPost post = {post}/>
            <FreelancerPost post = {post}/>
            <FreelancerPost post = {post}/> */}
            {posts.map(post => (
            <FreelancerPost key={post.id} post={post} />
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindFreelancer;
