import http from "../http-common";

const findAndChangeStatus = (user_id, status) => {
    return http.get("/freelancer_post/findAndChangeStatus/" + user_id + "&" + status);
};

const freelancerPostService = {
    findAndChangeStatus,
};
  
  export default freelancerPostService;
  