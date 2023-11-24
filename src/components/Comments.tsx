import prisma from "@/lib/db";
import { format } from "date-fns";
import { FC } from "react";

interface comment {
  id: string;
  text: string;
  createdAt: Date;
  authorEmail: string | null;
  postId: string | null;
  author: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
  } | null;
}
interface CommentsProps {
  postId: string;
}
const Comments: FC<CommentsProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      author: true,
    },
  });
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        {comments.map((comment: comment) => (
          <li key={comment.id} className="mb-4 bg-slate-300 p-2">
            <div className="flex items-center mb-2">
              <div className="text-blue-500 font-bold mr-2">
                {comment.author?.name}
              </div>
              <div className="text-gray-500">
                {format(comment.createdAt, "dd-MMM-yyyy")}
              </div>
            </div>
            <p className="text-black">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
