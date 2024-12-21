import { Router } from 'express';
import checkSchemaValidation from '../../utils/checkSchemaValidation';
import { blogValidations } from './blog.validation';
import { blogController } from './blog.controller';
import checkUserTokenIsValid from '../../utils/checkUserTokenIsValid';

const blogRouter = Router();

// create a new blog
blogRouter.post("/", checkUserTokenIsValid("user"), checkSchemaValidation(blogValidations.createBlogValidationSchema), blogController.createABlog)

// get all blogs
blogRouter.get("/", blogController.getAllBlogs);

// update blog
blogRouter.patch("/:id",checkUserTokenIsValid("user"), checkSchemaValidation(blogValidations.updateBlogValidationSchema), blogController.updateABlog);

// delete a blog
blogRouter.delete("/:id",checkUserTokenIsValid("user"), blogController.deleteBlog);


// export 
export default blogRouter;
