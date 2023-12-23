import { media_upload, http } from "./http-common";

const findOnebyId = id => {
    return http.get(`/project_post/${id}`);
  };
const sendProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budget_min', data.budgetMin);
    formData.append('budget_max', data.budgetMax);
    formData.append('tag', data.tag); 
    formData.append('user_id', 1);
    formData.append('image_file', data.image);

    return media_upload.post("/project_post/", formData);
  };


const updateProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budget_min', data.budgetMin);
    formData.append('budget_max', data.budgetMax);
    formData.append('image_file', data.image);
    formData.append('tag', data.tag);
    formData.append("user_id", 1);

    console.log("formData: ", formData);
    
    return media_upload.put(`/project_post/${data.id}`, formData);
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