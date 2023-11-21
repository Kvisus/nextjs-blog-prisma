import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";
import prisma from "@/lib/db";
import { FC } from "react";

interface SingleBlogPageProps {
  params: {
    id: string;
  };
}

const SingleBlogPage: FC<SingleBlogPageProps> = async ({ params }) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });
  console.log(post);
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p>Written By: {post?.author?.name}</p>
      <div className="mt-4">{post?.content}</div>

      <Comments postId={params.id} />
      <FormComment postId={params.id} />
    </div>
  );
};
export default SingleBlogPage;
