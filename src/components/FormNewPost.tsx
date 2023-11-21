"use client";

import { inputStyle } from "@/styles/styles";
import { Post } from "@/types/blog";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const FormNewPost = () => {
  const [formData, setFormData] = useState<Post>({
    title: "",
    content: "",
  });
  const { data } = useSession();
  // console.log(data);
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);
    try {
      const responce = await axios.post("api/posts", formData);
      if (responce.status === 200) {
        router.push("/blogs/${responce.data.newPost.id}");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={inputStyle}
          placeholder="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          name="content"
          placeholder="Content"
          className={inputStyle}
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={!data?.user?.email}
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold
  py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full
  disabled:bg-gray-400"
      >
        Submit
      </button>
    </form>
  );
};
export default FormNewPost;
