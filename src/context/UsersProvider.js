import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  bookmarkPostService,
  followUserService,
  getAllBookmarkService,
  getAllUsersService,
  removeBookmarkPostService,
  unFollowUserService,
  updateProfileService,
} from "../services/userServices";

export const UsersContext = createContext();

function UsersProvider({ children }) {
  const [allUser, setAlluser] = useState([]);
  const [bookmark, setBookmark] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("encodedToken");

  const getAllUsers = async () => {
    try {
      const {
        data: { users },
      } = await getAllUsersService();
      setAlluser(users);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllBookmarks = async () => {
    try {
      const {
        data: { bookmarks },
      } = await getAllBookmarkService(token);
      if (bookmarks && bookmarks.length > 0) {
        setBookmark([...bookmarks]);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const bookmarkPost = async (post, token) => {
    try {
      const {
        data: { bookmarks },
      } = await bookmarkPostService(post, token);
      setBookmark([...bookmarks]);
      toast.success("post added in bookmark");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const removeBookmarkPost = async (post, token) => {
    try {
      const {
        data: { bookmarks },
      } = await removeBookmarkPostService(post, token);
      setBookmark([...bookmarks]);
      toast.success("post removed from bookmark");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const followUser = async (userId) => {
    try {
      const { data } = await followUserService(userId, token);
      getAllUsers();
      setIsLoading(false);
      toast.success("Follow user !!");
    } catch (e) {
      console.log(e);
    }
  };
  const unFollowUser = async (userId) => {
    try {
      const { data } = await unFollowUserService(userId, token);

      getAllUsers();
      setIsLoading(false);
      toast.success("Unfollow user !!");
    } catch (e) {
      console.log(e);
    }
  };
  const updateProfile = async (editInput, token) => {
    try {
      const { data: users } = await updateProfileService(editInput, token);
      getAllUsers();
      setIsLoading(false);
      toast.success("Profile updated Successfuly.");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        getAllUsers,
        allUser,
        getAllBookmarks,
        bookmarkPost,
        removeBookmarkPost,
        bookmark,
        followUser,
        unFollowUser,
        updateProfile,
        isLoading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
export const useUsers = () => useContext(UsersContext);
