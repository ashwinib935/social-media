import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import {
  createPostService,
  deletePostService,
  dislikePostService,
  editPostService,
  getAllPostsService,
  getSinglePostService,
  likePostService,
} from "../services/postservices";
import { toast } from "react-toastify";

export const PostContext = createContext();
function PostProvider({ children }) {
  const [posts, setPosts] = useState();
  const [singlePostDetails, setSinglePostDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllPosts = async () => {
    try {
      const {
        data: { posts },
      } = await getAllPostsService();
      setPosts(posts);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const createPost = async ({ input, postImage, token, user }) => {
    try {
      const { data: posts } = await createPostService({
        input,
        postImage,
        token,
        user,
      });
      getAllPosts();
      setIsLoading(false);
      toast.success("Post created successfuly");
    } catch (e) {
      console.log(e);
    }
  };
  const editPost = async ({ input, postImage, token, post }) => {
    try {
      const { data: posts } = await editPostService({
        input,
        postImage,
        token,
        post,
      });
      getAllPosts();
      setIsLoading(false);
      toast.success("Post edited successfuly");
    } catch (e) {
      console.log(e);
    }
  };
  const deletePost = async (post, token) => {
    try {
      const { data: posts } = await deletePostService(post, token);
      getAllPosts();
      setIsLoading(false);
      toast.success("Post deleted successfuly");
    } catch (e) {
      console.log(e);
    }
  };
  const likedPost = async (post, token) => {
    try {
      const { data: posts } = await likePostService(post, token);
      getAllPosts();
      setIsLoading(false);
      toast.success("post liked !!");
    } catch (e) {
      console.log(e);
    }
  };
  const disLikedPost = async (post, token) => {
    try {
      const { data: posts } = await dislikePostService(post, token);
      getAllPosts();
      setIsLoading(false);
      toast.success("post disliked !!");
    } catch (e) {
      console.log(e);
    }
  };
  const getSinglePost = async (id) => {
    try {
      const {
        data: { post },
      } = await getSinglePostService(id);
      setSinglePostDetails({ ...post });
      getAllPosts();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PostContext.Provider
      value={{
        getAllPosts,
        posts,
        isLoading,
        createPost,
        editPost,
        deletePost,
        likedPost,
        disLikedPost,
        getSinglePost,
        singlePostDetails,
        setSinglePostDetails,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
export const usePost = () => useContext(PostContext);
