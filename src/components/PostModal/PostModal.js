import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../../context/PostProvider";
import { focusInputSelect } from "../../utils/focusInputSelect";
import UserAvatar from "../UserAvatar/UserAvatar";
import { toast } from "react-toastify";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./PostModal.css";
import { uploadImage } from "../../utils/uploadImage";
function PostModal({ post, setNewPostModal, setShowOption, currentUser }) {
  const [input, setInput] = useState(post || {});
  const [image, setImage] = useState(null);
  const token = localStorage.getItem("encodedToken");
  const { editPost } = usePost();
  const newPostRef = useRef();
  const submitEditPost = async (e) => {
    e.preventDefault();
    if (post) {
      if (image) {
        const response = await uploadImage(image);
        editPost({
          input: input?.content,
          postImage: response.url,
          token,
          post,
        });
      } else {
        editPost({
          input: input?.content,
          postImage: input?.postImage,
          token,
          post,
        });
      }
      setShowOption(false);
      setInput("");
      setImage(null);
      setNewPostModal(false);
      if (newPostRef.current !== null) {
        newPostRef.current.innerText = "";
      }
    }
  };
  useEffect(() => {
    if (post) newPostRef.current.innerText = post.content;
  }, [post]);
  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 items-start bg-darkSecondary text-sm  border-darkGrey px-4 py-3 cursor-text w-[90%] sm:w-1/2 shadow-dark shadow-lg rounded border"
      onClick={(e) => {
        e.stopPropagation();
        focusInputSelect(newPostRef);
      }}
    >
      <div>
        <UserAvatar user={currentUser} />
      </div>
      <form className="flex flex-col gap-4" onSubmit={submitEditPost}>
        <div
          role="textbox"
          ref={newPostRef}
          contentEditable="true"
          placeholder="What's happening?"
          className="w-full break-all bg-inherit outline-none mt-1.5"
          onInput={(e) =>
            setInput((prev) => ({
              ...prev,
              content: e.target.textContent,
            }))
          }
        />
        {input?.postImage || image ? (
          <div className="relative">
            <img
              src={image ? URL.createObjectURL(image) : input?.postImage}
              className="w-full h-auto rounded-md"
              alt={image?.name.split(".")[0]}
            />
            <button
              type="button"
              className="absolute top-1 right-2 text-lg"
              onClick={() =>
                input?.postImage
                  ? setInput((prev) => ({ ...prev, postImage: null }))
                  : setImage(null)
              }
            >
              <CloseRoundedIcon className="rounded-full bg-darkSecondary" />
            </button>
          </div>
        ) : null}
        <div className="flex justify-between gap-2">
          <label className="cursor-pointer text-lg">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (Math.round(e.target.files[0].size / 1024000) > 1) {
                  toast.error("File size should not be more than 1Mb");
                } else {
                  setImage(e.target.files[0]);
                }
              }}
            />
            <InsertPhotoIcon />
          </label>
          <div className="flex gap-2">
            <button
              type="reset"
              className="border border-primary rounded-full py-1 px-3"
              onClick={() => {
                post && setNewPostModal(false);
                setShowOption(false);
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn-post rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!input?.content?.trim()}
            >
              {post ? "Save" : "Post"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostModal;
