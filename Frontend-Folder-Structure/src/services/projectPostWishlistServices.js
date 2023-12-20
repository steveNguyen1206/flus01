import http from "./http-common";

const create = (userId, projectPostId) => {
    return http.post(`/wishlist/${userId}/${projectPostId}`);
}


const remove = (userId, projectPostId) => {
    return http.delete(`/wishlist/${userId}/${projectPostId}`);
}

export default {
    create,
    remove,
};
