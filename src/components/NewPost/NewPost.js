import React, { useRef, useState } from "react";
import { usePost } from "../../context/PostProvider";
import { focusInputSelect } from "../../utils/focusInputSelect";

import UserAvatar from "../UserAvatar/UserAvatar";
import "./NewPost.css";

function NewPost({ userProfile, token, loggedInUser }) {
  const [input, setInput] = useState("");
  const { createPost } = usePost();
  const newPostRef = useRef();
  const submitPost = (e) => {
    e.preventDefault();
    createPost({ input, postImage: "", token, user: userProfile });
    setInput("");
    newPostRef.current.innerText = "";
  };

  return (
    <div
      className="newpost-container grid grid-cols-[2rem_1fr] gap-2 items-start  text-sm  border-b border-darkGrey px-4 py-3 cursor-text"
      onClick={(e) => {
        e.stopPropagation();
        focusInputSelect(newPostRef);
      }}
    >
      <div>{loggedInUser ? <UserAvatar user={loggedInUser} /> : null}</div>
      <form className="flex flex-col gap-4" onSubmit={submitPost}>
        <div
          role="textbox"
          ref={newPostRef}
          contentEditable="true"
          placeholder="What's happening?"
          className="w-full break-all bg-inherit outline-none mt-1.5"
          onInput={(e) => setInput(e.currentTarget.textContent)}
        />
        <div className="ml-auto flex items-center gap-4">
          <button
            type="submit"
            className="btn-post rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim()}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
