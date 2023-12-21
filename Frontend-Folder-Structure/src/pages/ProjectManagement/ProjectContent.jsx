import React from "react";
import "./style.css";
import { useProjectManageContext } from "./ProjectManageProvider";


export const ProjectContent = () => {

  const {project, setProject} = useProjectManageContext();

  return (


          <div className="project-content-container">

            <div className="content-container">
            <div className="project-content-title">
              <h4 className="label-text">Project name</h4>
              <h4 className="title-text">{project.project_name}</h4>
            </div>

            <div className="row-container">
              <div className="field-container">
                <div className="label-text">Date begin</div>
                <div className="value-text">{project.start_day}</div>
              </div>

              <div className="field-container">
                <div className="label-text">Date end</div>
                <div className="value-text">{project.end_day}</div>
              </div>
            </div>

            <div className="row-container">
              <div className="field-container">
                <div className="label-text">Project owner</div>
                <div className="value-text">Mèo con 123</div>
              </div>
              <div className="field-container">
              <h4 className="label-text">Project member</h4>
                <h5 className="value-text">Chó con 1</h5>
                <h5 className="value-text">Chó con 2</h5>
              </div>
            </div>

            <div className="filed-container">
              <div className="label-text">Status</div>
              <div className="value-text">In progress</div>
            </div>  
            </div>

            <div className="progress-container">
              <h4 className="title-text --size-20" >Progress</h4>
              <div className="progress-bar-container">
              <span className="progress-mark label-text --size-16" style={{ left: '-10%' }}>12/10</span>
              <span className="progress-mark label-text --size-16" style={{ left: '50%' }}>12/12</span>
                <div className="progress-bar-full"></div>
                <div className="progress-bar-now"></div>
              </div>

            </div>

            <div className="project-requirement-container">
              <h4 className="title-text --size-20">Requierments</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis molestiae ratione laudantium necessitatibus harum, quas atque modi quis facere? Quisquam accusamus consequatur iure velit error hic, debitis itaque. Nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed ea aut animi qui consectetur eos asperiores quod nemo quibusdam pariatur, provident vitae placeat vel delectus consequuntur? Cupiditate, ratione sit.</p>
            </div>

            
          </div>
  );
};
