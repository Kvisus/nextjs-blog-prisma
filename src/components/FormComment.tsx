"use client";
import { ButtonStyle, inputStyle } from "@/styles/styles";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";

interface FormCommentProps {
  postId: string;
}
const FormComment: FC<FormCommentProps> = ({ postId }) => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { data } = useSession();

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    if (comment.trim() !== "") {
      try {
        const newComment = await axios.post(`/api/comments`, {
          postId,
          text: comment,
        });
        if (newComment.status === 200) {
          setComment("");
          router.refresh();
        }
      } catch (error) {
        console.error(error);
      }
    }
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
          disabled={!data?.user.email}
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
