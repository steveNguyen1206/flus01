import { http } from "./http-common";

const create = (data) => {
    return http.post("/comment", data);
};

const findAll = () => {
    return http.get("/comment");
    }

const findOne = id => {
    return http.get(`/comment/${id}`);
    }

const findCommentByProjectId = project_id => {
    return http.get(`/comment/findCommentByProjectId/${project_id}`);
    }

const findCommentByUserId = user_id => {
    return http.get(`/comment/findCommentByUserId/${user_id}`);
    }

const deleteComment = id => {
    return http.delete(`/comment/${id}`);
    }




export const commentService = {
    create,
    findAll,
    findOne,
    findCommentByProjectId,
    findCommentByUserId,
    deleteComment,
};



export default commentService;
