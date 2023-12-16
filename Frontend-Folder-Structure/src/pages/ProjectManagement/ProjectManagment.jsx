import React from "react";
import { TextContainer } from "@/components/container";
import "./style.css";
import { ProjectContent, ProjectConfigure } from ".";
import { createContext, useContext, useState } from "react";
import { ProjectManageProvider } from "./ProjectManageProvider";
import { ProjectManageGeneral } from "./ProjectManageGeneral";


export const ProjectManagement = () => {

  return (
    <ProjectManageProvider >

        <ProjectManageGeneral />

    </ProjectManageProvider>

  );
};

