import { Router } from 'express';
import checkSchemaValidation from '../../utils/checkSchemaValidation';
import { blogValidations } from './blog.validation';
import { blogController } from './blog.controller';

const blogRouter = Router();

// create a new blog
blogRouter.post("/", checkSchemaValidation(blogValidations.createBlogValidationSchema), blogController.createABlog)



// export 
export default blogRouter;
