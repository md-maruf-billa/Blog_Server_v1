import AppError from "../../errors/app.error";
import { TUser } from "../user/user.interface"
import { UserModel } from "../user/user.schema"
import status from 'http-status';

// create user into db
const registerUserIntoDB = async (payload: TUser) => {

    // check user already exits
    const userExist = await UserModel.findOne({ email: payload.email });
    if (userExist) {
        throw new AppError(status.BAD_REQUEST, "User already exist with this email");
    }
    const result = await UserModel.create(payload);
    result.password = "*******"
    return result;
}


export const authServices = {
    registerUserIntoDB
}