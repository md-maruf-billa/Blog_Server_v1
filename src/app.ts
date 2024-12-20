import express, { Request, Response } from 'express';
import sendResponse from './app/utils/sendResponse';
import cors from "cors";
import serverRoutes from './app/router/routes';
import globalErrorHandler from './app/errors/globalErrorHandler';
import  status  from 'http-status';
import notFound from './app/utils/apiNotFound';
const app = express()

// meddleware
app.use(express.json());
app.use(express.raw());
app.use(cors())
app.use("/api",serverRoutes)



// test route
app.get('/', (req: Request, res: Response) => {
    sendResponse(res, {
        message: "Server is successfully running 🏃‍♀️‍➡️🏃‍♀️‍➡️🏃‍♀️‍➡️",
        statusCode: status.OK,
        data: null
    })
})

// handel error globally
app.use(globalErrorHandler)
app.use(notFound)

export default app