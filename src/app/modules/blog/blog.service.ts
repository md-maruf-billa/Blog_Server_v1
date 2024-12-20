import QueryBuilder from "../../utils/queryBuilder";
import { TBlog } from "./blog.interface"
import { BlogModel } from "./blog.schema"

// save a blog data into db
const createABlogIntoDB = async (payload: TBlog) => {
    const result = await BlogModel.create(payload);
    return result;
}

// get all blogs from db
const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
    const blogQueries = new QueryBuilder(query, BlogModel.find({ isDeleted: { $ne: true } })).search(["title"]).filter().sort();
    const result = await blogQueries.queryModel.populate("author");
    return result;
}

// udpdate blog
const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
    const result = await BlogModel.findByIdAndUpdate(id, payload, { new: true });
    return result
}

// delete blog into db
const deleteBlogFromDB = async (id: string) => {
    await BlogModel.findByIdAndUpdate(id, { isDeleted: true });
}

export const blogSerices = {
    createABlogIntoDB,
    getAllBlogsFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB
}