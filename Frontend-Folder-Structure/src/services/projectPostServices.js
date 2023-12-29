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
    formData.append('tag_id', data.tag_id); 
    formData.append('user_id', 1);
    formData.append('image_file', data.image);

    console.log("formData: ", formData);
    return media_upload.post("/project_post/", formData);
  };


const updateProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budget_min', data.budgetMin);
    formData.append('budget_max', data.budgetMax);
    formData.append('image_file', data.image);
    formData.append('tag', data.tag_id);
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

const changeStatus = (id, status) => {
    return http.put(`/project_post/changeStatus/${id}/${status}`);
}



const projectPostServices= {
    sendProject,
    getAllProjects,
    getProjectbyId,
    updateProject,
    findOnebyId,
    changeStatus,
};



export default projectPostServices;