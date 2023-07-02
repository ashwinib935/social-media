import React, { useEffect, useState } from "react";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";
import { sortByDate } from "../../utils/sortByDate";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loader from "../../components/Loader/Loader";
import Postcard from "../../components/Postcard/Postcard";
import Searchbar from "../../components/Searchbar/Searchbar";
import SuggestedUser from "../../components/SuggestedUser/SuggestedUser";

function Explore() {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  const { getAllPosts, posts, isLoading } = usePost();
  const { getAllUsers, allUser, getAllBookmarks } = useUsers();
  const [activeSort] = useState("latest");

  useEffect(() => {
    getAllPosts();
    getAllUsers();
    getAllBookmarks();
  }, []);

  let sortedPosts = [];
  // let loggedInUser = [];

  if (posts && allUser.length > 0) {
    sortedPosts = sortByDate(posts, activeSort);
    // loggedInUser = allUser?.find(
    //   (dbuser) => dbuser.username === userProfile.username
    // );
  }
  return (
    <div className="home-container">
      <div className="section sidebar-left-container">
        <Sidebar />
      </div>
      <div className="section middle-container">
        <div className="heading">
          <h1>Explore</h1>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          sortedPosts.map((post) => <Postcard key={post.id} post={post} />)
        )}
      </div>
      <div className="section sidebar-right-container">
        <div className="hidden xl:block">
          <Searchbar />
          <SuggestedUser />
        </div>
      </div>
    </div>
  );
}

export default Explore;
