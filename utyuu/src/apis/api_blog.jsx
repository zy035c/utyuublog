import { simpleFetch, simplePost } from "./api";

const getAllBlogPosts = async () => {
  const parsedData = await simpleFetch("/blog/posts", "getAllBlogPosts");
  return parsedData;
};

/* write an api to post a blog with title and content */
const postNewBlog = async (title, blogContent) => {
  const data = { title, blogContent };
  const parsedData = await simplePost("/blog/posts", "postNewBlog", data);
  return parsedData;
};

export { getAllBlogPosts, postNewBlog };
