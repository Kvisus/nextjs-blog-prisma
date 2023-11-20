import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";

const SingleBlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post onew</h1>
      <p>Written By: John Doe</p>
      <div className="mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ex
        saepe cumque alias blanditiis aut assumenda impedit similique incidunt
        nam!
      </div>

      <Comments />
      <FormComment />
    </div>
  );
};
export default SingleBlogPage;
