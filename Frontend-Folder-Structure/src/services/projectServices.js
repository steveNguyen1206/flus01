import http from "./http-common";


const findOnebyId = id => {
    return http.get(`/project/${id}`);
  };

  const projectService = {
    findOnebyId,
  };
  
  export default projectService;