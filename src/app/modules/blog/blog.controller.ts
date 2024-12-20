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



export const blogController = {
    createABlog
}