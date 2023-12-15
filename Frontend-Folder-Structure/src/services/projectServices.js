import http from "./http-common";

const sendProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budget_min', data.budgetMin);
    formData.append('budget_max', data.budgetMax);
    formData.append('image', data.image);
    formData.append('tag', data.tag);
    formData.append('user_id', 1);
  
    try {
      const response = await http.post('/project/create', formData, {
        headers: {
          ...http.defaults.headers,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('Error submitting project:', error);
    }
    
    return http.post("/project", formData);
  };


const updateProject = async (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('detail', data.detail);
    formData.append('budgetMin', data.budgetMin);
    formData.append('budgetMax', data.budgetMax);
    formData.append('image', data.image);
    formData.append('tag', data.tag);
  
    try {
      const response = await http.post('/project/update', formData, {
        headers: {
          ...http.defaults.headers,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('Error submitting project:', error);
    }
    
    return http.post("/project", formData);
  };


const getAllProjects = () => {
    return http.get("/project");
};

const getProject = id => {
    return http.get(`/project/${id}`);
}

const getOwnerProject = id => {
    return http.get(`/project/owner/${id}`);
}

const projectServices= {
    sendProject,
    getAllProjects,
    getProject,
    updateProject,
    getOwnerProject
};

export default projectServices;