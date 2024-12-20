import { TBlog } from "./blog.interface"
import { BlogModel } from "./blog.schema"

// save a blog data into db
const createABlogIntoDB = async (payload: TBlog) => {
    const result = await BlogModel.create(payload);
    return result;
}

// get all blogs from db
const getAllBlogsFromDB = async () => {
    const result = await BlogModel.find().populate("author");
    return result;
}

export const blogSerices = {
    createABlogIntoDB,
    getAllBlogsFromDB
}