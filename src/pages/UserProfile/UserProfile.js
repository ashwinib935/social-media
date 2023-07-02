import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router";
import Loader from "../../components/Loader/Loader";
import Postcard from "../../components/Postcard/Postcard";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import Searchbar from "../../components/Searchbar/Searchbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SuggestedUser from "../../components/SuggestedUser/SuggestedUser";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";
import "./UserProfile.css";
function UserProfile() {
  const { username } = useParams();
  const { getAllPosts, posts, isLoading } = usePost();
  const { getAllUsers, allUser, getAllBookmarks } = useUsers();

  const navigate = useNavigate();
  const currentUser = allUser?.find((user) => user.username === username);
  const currentPosts = posts?.filter((post) => post.username === username);

  useEffect(() => {
    getAllPosts();
    getAllUsers();
    getAllBookmarks();
  }, []);

  return (
    <div className="home-container">
      <div className="section sidebar-left-container">
        <Sidebar />
      </div>
      <div className="section middle-container">
        <div className="user-heading">
          <BiArrowBack className="back-icon" onClick={() => navigate(-1)} />
          <h1 className="user-title">Profile Details</h1>
        </div>
        {currentUser ? <ProfileDetails currentUser={currentUser} /> : null}
        {isLoading ? (
          <Loader />
        ) : currentPosts?.length ? (
          currentPosts.map((post) => <Postcard key={post.id} post={post} />)
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

export default UserProfile;
