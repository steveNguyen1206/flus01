import http from "./http-common";


const findMemberOnebyId = (id, access_token) => {
  console.log("api call id", id)
    return http.get(`/project/${id}`,  {headers: {
      "Content-type": "application/json",
      "x-access-token": access_token,
    }});
  };

const createProject = (access_token) => {
  return http.post(`/project`,  {headers: {
    "Content-type": "application/json",
    "x-access-token": access_token,
  }});
}

const configureProject = (id, access_token, project) => {
  return http.put(`/project/${id}`,  {headers: {
    "Content-type": "application/json",
    "x-access-token": access_token,
  }}, project);
}


const findOwnerOnebyId = (id, access_token) => {
  console.log("api call id", id)
    return http.get(`project/own/${id}`,  {headers: {
      "Content-type": "application/json",
      "x-access-token": access_token,
    }});
  };

  

  const projectService = {
    findMemberOnebyId,
    findOwnerOnebyId,
    createProject,
    configureProject,
  };
  
  export default projectService;