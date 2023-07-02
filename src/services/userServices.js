import axios from "axios";
export const getAllUsersService = () => {
  return axios.get("/api/users");
};

export const getAllBookmarkService = (token) => {
  return axios.get(`/api/users/bookmark`, {
    headers: { authorization: token },
  });
};
export const bookmarkPostService = (post, token) => {
  return axios.post(
    `/api/users/bookmark/${post._id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const removeBookmarkPostService = (post, token) => {
  return axios.post(
    `/api/users/remove-bookmark/${post._id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const followUserService = (userId, token) => {
  return axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};
export const unFollowUserService = (userId, token) => {
  return axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const updateProfileService = ({ editInput, token }) => {
  return axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: token } }
  );
};
