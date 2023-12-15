import React from "react";
import { createContext, useContext, useState } from "react";

const ProjectManageContext = createContext();

export const ProjectManageProvider = ({ children }) => {
  const initialProject = {
    name: "First project",
    description: "",
    startDate: "12/10/2023",
    endDate: "1/1/2024",
    budget: 10,
    status: 1,
  };

  const [project, setProject] = useState(initialProject);

  const contextValue = {
    project,
    setProject,
  };

  return (
    <ProjectManageContext.Provider value={contextValue}>
      {children}
    </ProjectManageContext.Provider>
  )
}

export const useProjectManageContext = () => {
  return useContext(ProjectManageContext);
};


