import express, { Request, Response } from 'express';
import sendResponse from './app/utils/sendResponse';
import cors from "cors";
const app = express()

// meddleware
app.use(express.json());
app.use(express.raw());
app.use(cors())



// test route
app.get('/', (req: Request, res: Response) => {
    sendResponse(res, {
        message: "Server is successfully running 🏃‍♀️‍➡️🏃‍♀️‍➡️🏃‍♀️‍➡️",
        data: null
    })
})

export default app