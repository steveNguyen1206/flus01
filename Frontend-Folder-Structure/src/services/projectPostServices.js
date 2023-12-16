import http from "../http-common";

const findAndChangeStatus = (user_id, status) => {
    return http.get("/project_post/findAndChangeStatus/" + user_id + "&" + status);
};

const projectPostService = {
    findAndChangeStatus,
};
  
export default projectPostService;
  