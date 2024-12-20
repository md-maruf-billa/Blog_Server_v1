import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { blogSerices } from "./blog.service"
import status from 'http-status';

// create a new blog
const createABlog = catchAsync(async (req, res) => {
    const result = await blogSerices.createABlogIntoDB(req.body);
    sendResponse(res, {
        message: "Blog created successfully",
        data: result,
        statusCode: status.CREATED
    })
})

// get all blogs
const getAllBlogs = catchAsync(async (req, res) => {
    const result = await blogSerices.getAllBlogsFromDB();
    sendResponse(res, {
        message: "Blogs is retrieved successfully",
        data: result,
        statusCode: status.OK
    })
})

export const blogController = {
    createABlog,
    getAllBlogs
}