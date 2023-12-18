import http from "./http-common";


const findOnebyId = id => {
    return http.get(`/project_post/${id}`);
  };

  
const sendProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budget_min', data.budgetMin);
    formData.append('budget_max', data.budgetMax);
    formData.append('imgage_post_urls', "");
    formData.append('tag', data.tag); 
    formData.append('user_id', 1);



    return http.post("/project_post/create", formData);
  };


const updateProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budget_min', data.budgetMin);
    formData.append('budget_max', data.budgetMax);
    formData.append('image', data.image);
    formData.append('tag_id', data.tag);
    formData.append("user_id", 1);
    formData.append("id", data.id);
    
    return http.put("/project_post/update", formData);
  };


const getAllProjects = () => {
    return http.get("/project_post/findAll");
};

const getProjectbyId = id => {
    return http.get(`/project_post/${id}`);
}

const projectPostServices= {
    sendProject,
    getAllProjects,
    getProjectbyId,
    updateProject,
    findOnebyId,
};

export default projectPostServices;