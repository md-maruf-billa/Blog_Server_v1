import { Response } from "express";
type Payload = {
    message: string;
    data: any
}

const sendResponse = (res: Response, payload: Payload) => {
    res
        .status(201)
        .send({
            sucess: true,
            message: payload.message,
            data: payload.data
        })
}

export default sendResponse;