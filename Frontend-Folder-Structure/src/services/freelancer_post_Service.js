import { media_upload, http } from "./http-common";

const allposts = () => {
    return http.get("/freelancer_post/allposts");
}

const findOnebyId = id => {
    return http.get(`/freelancer_post/${id}`);
};

// const create = data => {
//     return http.post("/freelancer_post", data);
// }

const update = (data) => {
    return http.put(`/freelancer_post`, data);
}


const sendPost = async (data) => {
    let formData = new FormData();
    console.log(data);
    console.log("data.about_me", data.about_me);
    formData.append('freelancer_id', "1");
    formData.append('about_me', data.about_me);
    formData.append('skill_description', data.skill_description);
    formData.append('lowset_price', data.lowset_price);
    formData.append('delivery_due', data.delivery_due);
    formData.append('imgage_post_urls', "");
    formData.append('skill_tag', data.skill_tag);

    console.log(formData);
    for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
  
    try {
      const response = await http.post('/freelancer_post', formData, {
        headers: {
          ...http.defaults.headers,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('Error submitting post:', error);
    }
    
    return http.post("/freelancer_post", formData);
  };


  const updatePost = async (data) => {
    let formData = new FormData();
    formData.append('about_me', data.about_me);
    formData.append('skill_description', data.skill_description);
    formData.append('lowset_price', data.lowset_price);
    formData.append('delivery_due', data.delivery_due);
    formData.append('imgage_post_urls', data.imgage_post_urls);
    formData.append('skill_tag', data.skill_tag);
    formData.append("freelancer_id", data.id);


    try {
      const response = await http.put('/freelancer_post', formData, {
        headers: {
          ...http.defaults.headers,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log('Error submitting project:', error);
    }
    
    return http.put("/freelancer_post", formData);
  };


const freelancer_post_Service = {
    // create,
    update,
    allposts,
    sendPost,
    updatePost
};

export default freelancer_post_Service;