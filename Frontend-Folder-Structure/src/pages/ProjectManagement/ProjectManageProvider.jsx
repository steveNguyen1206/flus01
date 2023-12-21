import React from "react";
import { createContext, useContext, useState } from "react";

const ProjectManageContext = createContext();

export const ProjectManageProvider = ({own, projectId, children }) => {
  const initialProject = {
    id: projectId.id,
    project_name: "First project",
    project_description: "",
    start_date: "12/10/2023",
    end_date: "1/1/2024",
    budget: 10,
    status: 0,
  };


  const isOwn = own;

  const [project, setProject] = useState(initialProject);

  const contextValue = {
    project,
    setProject,
    isOwn,
  };
  console.log("project id", project.id);

  return (
    <ProjectManageContext.Provider value={contextValue}>
      {children}
    </ProjectManageContext.Provider>
  )
}

export const useProjectManageContext = () => {
  return useContext(ProjectManageContext);
};


