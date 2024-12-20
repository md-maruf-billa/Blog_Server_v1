import { NextFunction, Request, Response } from "express";
import { Server_Config } from "../config/server.config";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 400;
    let message = "Something went wrong";


    // send response
    res.status(err?.status || statusCode).send({
        success: false,
        message: err?.message || message,
        stack: Server_Config.ENV_TYPE === 'development' ? err.stack : null
    })
}

// export
export default globalErrorHandler;