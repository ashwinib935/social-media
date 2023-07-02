import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../../context/PostProvider";
import { focusInputSelect } from "../../utils/focusInputSelect";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./PostModal.css";
function PostModal({ post, setNewPostModal, setShowOption, currentUser }) {
  const [input, setInput] = useState(post || {});
  const token = localStorage.getItem("encodedToken");
  const { editPost } = usePost();
  const newPostRef = useRef();
  const submitEditPost = (e) => {
    e.preventDefault();
    if (post) {
      editPost({
        input: input?.content,
        postImage: input?.postImage,
        token,
        post,
      });
      setInput({});
      setNewPostModal(false);
      setShowOption(false);
      newPostRef.current.innerText = "";
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
      </form>
    </div>
  );
}

export default PostModal;
