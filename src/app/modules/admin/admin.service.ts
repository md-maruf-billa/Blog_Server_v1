import { BlogModel } from "../blog/blog.schema";
import { UserModel } from "../user/user.schema"

// block a user int db
const blockUserInDb = async (userId: string) => {
    const result = await UserModel.findByIdAndUpdate(userId, { isBlocked: true });
    return result;
}
// delete blogs into db
const deleteBlogIntoDb = async (blogId: string) => {
    const result = await BlogModel.findByIdAndUpdate(blogId, { isDeleted: true });
    return result;
}


export const adminServices = {
    blockUserInDb,
    deleteBlogIntoDb
}