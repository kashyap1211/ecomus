import API from "../utils/api";

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const { data } = await API.get("/blogs");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// Fetch single blog by id
export const fetchBlogById = async (id) => {
  try {
    const { data } = await API.get(`/blogs/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
