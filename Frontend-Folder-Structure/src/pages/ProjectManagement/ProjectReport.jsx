import React from "react";
import "./style.css";
import { useProjectManageContext } from "./ProjectManageProvider";
import { TextField } from "@mui/material";
import { useState } from "react";
import projectService from "@/services/projectServices";
import { useEffect } from "react";

export const ProjectReport = () => {

  const initialPayload = {
    resources: "",
    message: "",
    projectId: "",
  }
  const {project, setProject} = useProjectManageContext();
  const [report, setReport] = useState(initialPayload);
  console.log(project)

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setReport({
      ...report, [name] : value
    })
    console.log(report);
  }

  const handleCreateReport = async () => {
    const responce = await projectService.createProjectReport(project.id, localStorage.getItem("AUTH_TOKEN"), report)
    console.log(responce);
  }

  useEffect(()=>{
    projectService.getProjectReport(project.id, localStorage.getItem("AUTH_TOKEN"))
    .then((report_data) => { 
        if(report_data.status == 200)
        {
          setReport(report_data.data);
        }
        console.log(report)
    });
  }, [])

  return (
          <div className="project-content-container">
                <div className="project-content-title" style={{textAlign: 'center'}}>
                <h4 className="title-text">Report</h4>
                </div>

                
                <div className="project-requirement-container" style={{padding: "5%"}}    >

                    <div className="title-text --size-16">Message</div> 
                    <TextField  multiline name="message" placeholder="Telling your client what you have done for the project." minRows={5} onChange={handleInputChange} value={report.message}/>

                    <div className="title-text --size-16" style={{marginTop: 16}}>Resources</div> 
                    <TextField  multiline name="resources" placeholder="Place resources that contain your work heres." sx={{backgroundColor: "#EBE8E8"}} minRows={5} onChange={handleInputChange} value={report.resources}/>
                
                    <div className="project-content-container --center">
                        <button className="my-button --button-green" onClick={handleCreateReport}>Complete and send for judgment</button>
                    </div>
                </div>   
          </div>
  );
};
