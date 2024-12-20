import z from 'zod';

const createBlogValidationSchema = z.object({
    title: z.string(),
    content: z.string(),
    author: z.string()
})


export const blogValidations = {
    createBlogValidationSchema
}