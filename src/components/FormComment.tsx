"use client";
import { ButtonStyle, inputStyle } from "@/styles/styles";
import { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    console.log(comment);
  };

  return (
    <div>
      <div className="mt-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold
        mb-2"
        >
          Add Comment
        </label>
        <input
          value={comment}
          onChange={handleCommentChange}
          type="text"
          name="comment"
          id=""
          className={inputStyle}
        />
        <button
          onClick={handleSubmitComment}
          className={`${ButtonStyle}, w-1/3 mt-2`}
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};
export default FormComment;
