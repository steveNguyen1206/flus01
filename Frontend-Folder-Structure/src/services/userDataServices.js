import http from "./http-common";

const findAll = () => {
  return http.get("/user");
};

// findOnebyId
const findOnebyId = id => {
  return http.get(`/user/${id}`);
};

const signup = data => {
  return http.post("/auth/signup", data);
};

const signin = data => {
  return http.post("/auth/signin", data);
};

const update = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const updateAvatar = (id, avatarFile) => {
  const formData = new FormData();
  formData.append('avatar', avatarFile);

  return http.put(`/user/avatar/${id}`, formData);
}

// const remove = id => {
//   return http.delete(`/user/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/user`);
// };

// const findByTitle = title => {
//   return http.get(`/user?title=${title}`);
// };

const findOnebyAccountName = account_name => {
  return http.get(`/user/account_name/${account_name}`);
};

const findOnebyEmail = account_name => {
  return http.get(`/user/email/${email}`);
};

const userDataService = {
  findAll,
  findOnebyId,
  signup,
  signin,
  update,
  findOnebyAccountName,
  findOnebyEmail,
  updateAvatar
};

export default userDataService;
