import axios from "axios";
export const getAllPostsService = () => {
  return axios.get("/api/posts");
};

export const createPostService = ({ input, postImage, token, user }) => {
  return axios.post(
    "/api/posts",
    { postData: { content: input, postImage, fullName: user.fullName } },
    {
      headers: { authorization: token },
    }
  );
};

export const editPostService = ({ input, postImage, token, post }) => {
  return axios.post(
    `/api/posts/edit/${post._id}`,
    { postData: { content: input, postImage } },
    {
      headers: { authorization: token },
    }
  );
};

export const deletePostService = (post, token) => {
  return axios.delete(`/api/posts/${post._id}`, {
    headers: { authorization: token },
  });
};

export const likePostService = (post, token) => {
  return axios.post(
    `/api/posts/like/${post._id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const dislikePostService = (post, token) => {
  return axios.post(
    `/api/posts/dislike/${post._id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const getSinglePostService = (id) => {
  return axios.get(`/api/posts/${id}`);
};
