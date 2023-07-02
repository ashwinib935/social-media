import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { usePost } from "../../context/PostProvider";
import { useUsers } from "../../context/UsersProvider";
import { getPostDate } from "../../utils/getPostDate";
import { likedByLoggedInUser } from "../../utils/likedByloggedInUser";
import PostModal from "../PostModal/PostModal";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Postcard.css";

function Postcard({ post }) {
  const { posts, deletePost, likedPost, disLikedPost } = usePost();
  const { allUser, bookmark, bookmarkPost, removeBookmarkPost } = useUsers();
  const [newPostModal, setNewPostModal] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("encodedToken");
  const currentPost = posts?.find((dbPost) => dbPost._id === post._id);
  const currentUser = allUser?.find(
    (dbUser) => dbUser.username === post.username
  );
  const {
    _id,
    username,
    fullName,
    content,
    postImage,
    id,
    likes,
    comments,
    createdAt,
  } = currentPost;
  const navigate = useNavigate();
  const postRef = useRef();
  const deletePostOnSubmit = () => {
    deletePost(post, token);
  };
  const isLiked = likedByLoggedInUser(post, user);
  const handleLikePost = () => {
    if (isLiked) {
      disLikedPost(post, token);
    } else {
      likedPost(post, token);
    }
  };

  const isPresentInBookmark = bookmark?.find((id) => id === post._id);

  const handleBookmark = () => {
    if (isPresentInBookmark) {
      removeBookmarkPost(post, token);
    } else {
      bookmarkPost(post, token);
    }
  };
  return (
    <div className="container-postcard">
      <div className="postcard grid grid-cols-[2rem_43vw] gap-2 text-sm border-b border-darkGrey px-4 py-3 cursor-pointer">
        <div
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${username}`);
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
                navigate(`/profile/${username}`);
              }}
            >
              <div className="flex flex-col cursor-pointer">
                <span className="font-bold tracking-wide break-normal ">
                  {currentUser?.fullName}
                </span>
                <span className="text-lightGrey break-normal">
                  @ {currentUser?.username}
                </span>
              </div>

              <div className="text-lightGrey break-normal">
                {getPostDate(createdAt)}
              </div>
            </div>
            <div className="relative">
              {user.username === username && (
                <MoreHorizIcon
                  className=" p-0.5 cursor-pointer hover:bg-dark hover:rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOption(!showOption);
                  }}
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
          <div onClick={() => navigate(`/post/${_id}`)} ref={postRef}>
            <div className="break-normal">{content}</div>
            {postImage ? (
              <div className="w-2/3 h-2/3/ mx-auto my-1">
                <img
                  src={postImage}
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
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikePost();
                }}
              >
                {isLiked ? (
                  <FavoriteIcon className="text-primary" />
                ) : (
                  <FavoriteBorderIcon className="text-primary" />
                )}
              </button>
              {likes.likeCount > 0 && (
                <span className="ml-1">{likes.likeCount}</span>
              )}
            </div>
            <div>
              <button
                className="cursor-pointer hover:bg-dark hover:rounded-full"
                fdprocessedid="xci5a9"
              >
                <ModeCommentOutlinedIcon className="w-1 h-1" />
              </button>
              {comments ? (
                <span className="ml-1">{comments.length}</span>
              ) : null}
            </div>
            <button
              className="cursor-pointer hover:bg-dark hover:rounded-full"
              fdprocessedid="xxjb7"
              onClick={(e) => {
                e.stopPropagation();
                handleBookmark();
              }}
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
      {newPostModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <PostModal
            post={post}
            setShowOption={setShowOption}
            setNewPostModal={setNewPostModal}
            currentUser={currentUser}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Postcard;
