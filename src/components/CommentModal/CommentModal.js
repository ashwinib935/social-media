import React, { useRef, useState } from "react";
import { focusInputSelect } from "../../utils/focusInputSelect";

function CommentModal({ setShowCommentModal }) {
  const [comment, setComment] = useState("");

  const submitComment = (e) => {
    e.preventDefault();
  };
  const commentRef = useRef();
  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 items-start bg-darkSecondary text-sm  border-darkGrey px-4 py-3 cursor-text w-1/2 shadow-dark shadow-lg rounded border"
      onClick={(e) => {
        e.stopPropagation();
        focusInputSelect(commentRef);
      }}
    >
      <form className="flex flex-col gap-4" onSubmit={submitComment}>
        <div
          role="textbox"
          ref={commentRef}
          contentEditable="true"
          placeholder="Post Comment?"
          className="w-full break-all bg-inherit outline-none mt-1.5"
          onInput={(e) => setComment(e.currentTarget.textContent)}
        />
        <div className="flex gap-2">
          <button
            type="reset"
            className="border border-primary rounded-full py-1 px-3"
            onClick={() => {
              setShowCommentModal(false);
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-primary rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!comment.trim()}
          >
            Reply
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentModal;
