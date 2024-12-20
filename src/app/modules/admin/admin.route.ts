import { Router } from "express";
import { adminController } from "./admin.controller";

const adminRouter = Router();

// block user
adminRouter.patch("/users/:userId/block", adminController.blockUser);

// delete blogs
adminRouter.delete("/blogs/:id", adminController.deleteBlog);



export default adminRouter;