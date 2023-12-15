import React from 'react';
import './job.css';
import Search from '@/components/Search';
import { Header, Footer } from '@/layout';
import Post from '@/components/JobPost/Post';
import Filter from '@/components/Filter';
// get all project and poster info
import getAllProject from '@/services/projectServices';
import { useEffect, useState } from 'react';

const Job = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const projectsData = await getAllProject();
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <>
      <div className="job-page">
        <div className="content">
          <div className="containerp">
            <div className="topbar">
              <div className="button">
                <button className="btn-new-post">+ New Post</button>
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
            {/* const Post = ({
  projectId,
  projectTitle,
  projectTags,
  projectDetail,
  projectBudget,
} */}

            {projects.map((project) => (
              <Post
                key={project.project_id}
                projectId={project.project_id}
                projectTitle={project.project_name}
                projectTags={project.project_tags}
                projectDetail={project.project_detail}
                projectBudget={project.project_budget}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
