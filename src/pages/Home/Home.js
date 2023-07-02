import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import NewPost from "../../components/NewPost/NewPost";
import Postcard from "../../components/Postcard/Postcard";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sortbar from "../../components/Sortbar/Sortbar";
import SuggestedUser from "../../components/SuggestedUser/SuggestedUser";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";
import { sortByDate } from "../../utils/sortByDate";
import "./Home.css";

function Home() {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("encodedToken");
  const { getAllPosts, posts, isLoading } = usePost();
  const { getAllUsers, allUser } = useUsers();
  const [activeSort, setActiveSort] = useState("latest");

  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);

  let loggedInUser;
  let timelinePosts = [];
  let postOfFollowingUsers = [];
  let postsOfUser = [];

  if (allUser && posts) {
    if (allUser.length > 0 && posts.length > 0) {
      loggedInUser = allUser?.find(
        (dbuser) => dbuser.username === userProfile.username
      );
      const followingUsers = loggedInUser?.following;

      postOfFollowingUsers = posts?.filter((post) =>
        followingUsers?.some(
          (followinguser) => followinguser.username === post.username
        )
      );
      postsOfUser = posts?.filter(
        (post) => post?.username === loggedInUser?.username
      );
    }
  }

  if (postOfFollowingUsers && postsOfUser) {
    timelinePosts = [...postOfFollowingUsers, ...postsOfUser];
  }
  const sortedPosts = sortByDate(timelinePosts, activeSort);

  return (
    <div className="home-container">
      <div className="section sidebar-left-container">
        <Sidebar />
      </div>
      <div className="section middle-container">
        <div className="heading">
          <h1>Home</h1>
        </div>
        <div>
          <NewPost
            userProfile={userProfile}
            token={token}
            loggedInUser={loggedInUser}
          />
        </div>
        <div>
          <Sortbar
            setActiveSort={setActiveSort}
            activeSort={activeSort}
            timelinePosts={timelinePosts}
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : sortedPosts?.length ? (
          sortedPosts.map((post) => <Postcard key={post.id} post={post} />)
        ) : (
          <div className="p-4 text-center">No posts</div>
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

export default Home;
