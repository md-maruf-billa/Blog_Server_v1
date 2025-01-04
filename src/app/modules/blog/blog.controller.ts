import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { blogSerices } from './blog.service'
import status from 'http-status'

// create a new blog
const createABlog = catchAsync(async (req, res) => {
  const user = req.userInfo as any
  const blogData = { ...req.body, author: user.userId }
  const result = await blogSerices.createABlogIntoDB(blogData)
  sendResponse(res, {
    message: 'Blog created successfully',
    data: result,
    statusCode: status.CREATED
  })
})

// get all blogs
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await blogSerices.getAllBlogsFromDB(req.query)
  sendResponse(res, {
    message: 'Blogs is retrieved successfully',
    data: result,
    statusCode: status.OK
  })
})

// update blog

const updateABlog = catchAsync(async (req, res) => {
  const result = await blogSerices.updateBlogIntoDB(req.params.id, req.body)
  sendResponse(res, {
    message: 'Blog updated successfully',
    data: result,
    statusCode: status.OK
  })
})

//delete blog
const deleteBlog = catchAsync(async (req, res) => {
  await blogSerices.deleteBlogFromDB(req.params.id)
  sendResponse(res, {
    message: 'Blog deleted successfully',
    statusCode: status.OK,
    data: null
  })
})

export const blogController = {
  createABlog,
  getAllBlogs,
  updateABlog,
  deleteBlog
}
