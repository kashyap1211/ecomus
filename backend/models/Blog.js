import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            default: "admin",
        },
        date: {
            type: Date,
            default: Date.now,
        },
        categories: [
            {
                type: String,
                trim: true,
            },
        ],
        tags: [
            {
                type: String,
                trim: true,
            },
        ],
        images: [
            {
                type: String, 
            },
        ],
        contents: [
            {
                type: String,
            },
        ],
    }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
