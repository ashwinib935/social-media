import React, { useRef, useState } from "react";
import { usePost } from "../../context/PostProvider";
import { focusInputSelect } from "../../utils/focusInputSelect";
import { toast } from "react-toastify";
import UserAvatar from "../UserAvatar/UserAvatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import "./NewPost.css";
import { uploadImage } from "../../utils/uploadImage";

function NewPost({ userProfile, token, loggedInUser }) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const { createPost } = usePost();
  const newPostRef = useRef();

  const submitPost = async (e) => {
    e.preventDefault();
    if (image) {
      const response = await uploadImage(image);
      createPost({ input, postImage: response.url, token, user: userProfile });
    } else {
      createPost({ input, postImage: "", token, user: userProfile });
    }

    setInput("");
    setImage(null);
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
          <label className="cursor-pointer text-lg">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                Math.round(e.target.files[0].size / 1024000) > 1
                  ? toast.error("File size should not be more than 1Mb")
                  : setImage(e.target.files[0])
              }
            />
            <InsertPhotoIcon />
          </label>
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
