import React from "react";
import { TextContainer } from "@/components/container";
import "./style.css";
import { ProjectContent, ProjectConfigure } from ".";
import { createContext, useContext, useState } from "react";
import { useProjectManageContext } from "./ProjectManageProvider";
import { useEffect } from "react";
import projectService from "@/services/projectServices";


export const ProjectManageGeneral = () => {

  const {project, setProject, isOwn} = useProjectManageContext();

  const getMemberProject = (projectId) => {
    projectService
      .findMemberOnebyId(projectId, localStorage.getItem("AUTH_TOKEN"))
      .then((response) => {
        setProject(response.data);
        console.log(response.data)
        // console.log("test", isOwn);

      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getOwnerProject = (projectId) => {
    projectService
      .findOwnerOnebyId(projectId, localStorage.getItem("AUTH_TOKEN"))
      .then((response) => {
        setProject(response.data);
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (project.id) 
    {
      if(isOwn)
        getOwnerProject(project.id)
      else
        getMemberProject(project.id)
    };
    console.log("effect", project.id)
  }, []);




  return (

    <div className="qun-l-d-n">
          <div className="tm-d-n">
            <div className="title-wrapper">
              <h5 className="title-text --color-green --size-20">My projects</h5>
            </div>

            <form className="gr-search" >
              <input  className="label-text" type="text" placeholder="Search" />
              <img className="search-icon" src="https://c.animaapp.com/6LZYVBLH/img/search-icon-1.svg"/>
            </form>


              <div className="gr-findskill">
                <div className="fillter-wrapper --background-green-accent">
                  <div className="value-text--color-green  --color-white --size-16">All</div>
                </div>

                <div className="fillter-wrapper --background-white ">
                  <div className="value-text --color-green --size-16">Completed</div>
                </div>

                <div className="fillter-wrapper --background-white">
                  <div className="value-text --color-green --size-16">Canceled</div>
                </div>
              </div>

              <div className="all-project-container">

              <div className="all-project-item --background-gradient " >
                  <div className="project-img" />
                  <h4 className="title-text --size-16">Cao tốc Bắc Nam HD...</h4>
              </div>
              <div className="all-project-item">
                  <div className="project-img" />
                  <div className="title-text --size-16 --color-light">Thủy điện Hòa Bình</div>
              </div>

                  <div className="all-project-item">
                      <div className="project-img" />
                      <div className="title-text --size-16 --color-light">Thủy điện Hòa Bình</div>
                  </div>

                  <div className="all-project-item">
                      <div className="project-img" />
                      <div className="title-text  --size-16 --color-light">Thủy điện Hòa Bình</div>
                    </div>
                </div>

                <div className="all-project-item">
                    <div className="project-img" />
                    <div className="title-text  --size-16 --color-light">Thủy điện Hòa Bình</div>
                  </div>
              </div>
             

        <div className="frame">
          <div className="project-title-container">
            <h2 className="title-text --size-28 --color-white">{project.status == 0 ? "Confiugre Project" : project.project_name}</h2>
          </div>
          <div className="function-text-wraper">
            <h4 className="function-text --color-green">General</h4>
            <h4 className="function-text">Report</h4>
            <h4 className="function-text">Notification</h4>
            <h4 className="function-text">Appeal</h4>
          </div>


            {project.status==0 ?
            (
              
              isOwn ? <ProjectConfigure  /> : <>Project is under config. Contact your client for more infomation </>
            ) : (
              <ProjectContent />
            )
          }
        </div>
       
      </div>

  );
};

