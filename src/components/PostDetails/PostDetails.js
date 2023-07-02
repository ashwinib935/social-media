import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";
import { getPostDate } from "../../utils/getPostDate";
import { likedByLoggedInUser } from "../../utils/likedByloggedInUser";
import Loader from "../Loader/Loader";
import PostModal from "../PostModal/PostModal";
import Searchbar from "../Searchbar/Searchbar";
import Sidebar from "../Sidebar/Sidebar";
import SuggestedUser from "../SuggestedUser/SuggestedUser";
import "./PostDetails.css";
import UserAvatar from "../UserAvatar/UserAvatar";
function PostDetails() {
  const { postId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("encodedToken");
  const [showOption, setShowOption] = useState(false);
  const [newPostModal, setNewPostModal] = useState(false);
  const {
    getAllPosts,
    getSinglePost,
    singlePostDetails,
    posts,
    isLoading,
    deletePost,
    likedPost,
    disLikedPost,
  } = usePost();
  const { allUser, getAllUsers, bookmark, bookmarkPost, removeBookmarkPost } =
    useUsers();
  useEffect(() => {
    getAllPosts();
    getAllUsers();
    getSinglePost(postId);
  }, [postId]);
  const navigate = useNavigate();
  let currentUser = {};

  currentUser = allUser?.find(
    (dbUser) => dbUser.username === singlePostDetails?.username
  );
  const currentPost = posts?.find(
    (dbPost) => dbPost._id === singlePostDetails?._id
  );

  let isLiked = likedByLoggedInUser(currentPost, user);
  const handleLikePost = () => {
    if (isLiked) {
      disLikedPost(currentPost, token);
      getAllPosts();
    } else {
      likedPost(currentPost, token);
      getAllPosts();
    }
  };

  const isPresentInBookmark = bookmark?.find(
    (id) => id === singlePostDetails._id
  );

  const handleBookmark = () => {
    if (isPresentInBookmark) {
      removeBookmarkPost(singlePostDetails, token);
    } else {
      bookmarkPost(singlePostDetails, token);
    }
  };
  const deletePostOnSubmit = () => {
    deletePost(currentPost, token);
    navigate(-1);
  };
  return (
    <div className="home-container">
      <div className="section sidebar-left-container">
        <Sidebar />
      </div>
      <div className="section middle-container">
        <div className="post-heading">
          <BiArrowBack className="back-icon" onClick={() => navigate(-1)} />
          <h1 className="post-title">Post</h1>
        </div>

        {isLoading ? (
          <Loader />
        ) : currentPost ? (
          <div className="container-postcard">
            <div className="postcard grid grid-cols-[2rem_43vw] gap-2 text-sm border-b border-darkGrey px-4 py-3 cursor-pointer">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/profile/${currentUser.username}`);
                }}
              >
                <UserAvatar user={currentUser} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div
                    className="flex  gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/profile/${currentUser.username}`);
                    }}
                  >
                    <div className="flex flex-col cursor-pointer">
                      <span className="font-bold tracking-wide break-normal ">
                        {currentUser.fullName}
                      </span>
                      <span className="text-lightGrey break-normal">
                        @ {currentUser.username}
                      </span>
                    </div>
                    {/* <span className="text-lightGrey">·</span> */}
                    <div className="text-lightGrey break-normal">
                      {getPostDate(currentPost.createdAt)}
                    </div>
                  </div>
                  <div className="relative">
                    {user.username === currentPost.username && (
                      <MoreHorizIcon
                        className=" p-0.5 cursor-pointer hover:bg-dark hover:rounded-full"
                        onClick={() => setShowOption(!showOption)}
                      />
                    )}
                    {showOption && (
                      <div className="option-container">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setNewPostModal(true);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deletePostOnSubmit();
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="break-normal">{currentPost.content}</div>
                  {currentPost.postImage ? (
                    <div className="w-2/3 h-2/3/ mx-auto my-1">
                      <img
                        src={currentPost.postImage}
                        alt="post"
                        className=" w-8/10 mx-auto rounded my-1"
                      />
                    </div>
                  ) : null}
                </div>

                <div className="flex gap-6 -ml-2 mt-1">
                  <div>
                    <button
                      className="cursor-pointer hover:bg-dark hover:rounded-full "
                      fdprocessedid="wdgn5c"
                      onClick={handleLikePost}
                    >
                      {isLiked ? (
                        <FavoriteIcon className="text-primary" />
                      ) : (
                        <FavoriteBorderIcon className="text-primary" />
                      )}
                    </button>
                    {currentPost.likes.likeCount > 0 && (
                      <span className="ml-1">
                        {currentPost.likes.likeCount}
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      className="cursor-pointer hover:bg-dark hover:rounded-full"
                      fdprocessedid="xci5a9"
                    >
                      <ModeCommentOutlinedIcon className="w-1 h-1" />
                    </button>
                    {singlePostDetails.comments ? (
                      <span className="ml-1">
                        {currentPost.comments.length}
                      </span>
                    ) : null}
                  </div>
                  <button
                    className="cursor-pointer hover:bg-dark hover:rounded-full"
                    fdprocessedid="xxjb7"
                    onClick={handleBookmark}
                  >
                    {isPresentInBookmark ? (
                      <BookmarkOutlinedIcon className="text-green" />
                    ) : (
                      <BookmarkBorderOutlinedIcon className="text-green" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="section sidebar-right-container">
        <div className="hidden xl:block">
          <Searchbar />
          <SuggestedUser />
        </div>
      </div>
      {newPostModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <PostModal
            post={currentPost}
            setShowOption={setShowOption}
            setNewPostModal={setNewPostModal}
            currentUser={currentUser}
          />
        </div>
      ) : null}
    </div>
  );
}

export default PostDetails;
