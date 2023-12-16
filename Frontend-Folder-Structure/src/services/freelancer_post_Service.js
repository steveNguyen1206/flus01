import { media_upload, http } from "./http-common";

const create = data => {
    return http.post("/freelancer_post", data);
}

const update = (data) => {
    return http.put(`/freelancer_post`, data);
}

const allposts = () => {
    return http.get("/freelancer_post/allposts");
}

const freelancer_post_Service = {
    create,
    update,
    allposts
};

export default freelancer_post_Service;