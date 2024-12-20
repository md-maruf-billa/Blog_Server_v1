import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { authServices } from "./auth.service";
import status from "http-status";
// register a user
const registerNewUser = catchAsync(async (req, res) => {
    const result = await authServices.registerUserIntoDB(req.body);
    sendResponse(res, {
        message: "User Registered Successfully",
        statusCode:status.CREATED,
        data: result
    })
})


export const authControllers = {
    registerNewUser
}