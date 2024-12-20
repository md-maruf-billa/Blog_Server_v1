import AppError from "../../errors/app.error";
import { TUser, TUserLogin } from "../user/user.interface"
import { UserModel } from "../user/user.schema"
import status from 'http-status';
import bcript from 'bcrypt';

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
// login user from db
const loginUserFromDb = async (payload: TUserLogin) => {
    const { email, password } = payload;

    // check user not exits
    const userExist = await UserModel.findOne({ email }).select("+password");
    console.log(userExist)
    if (!userExist) {
        throw new AppError(status.NOT_FOUND, "User not exist with this email");
    }

    // check password
    const isPasswordMatch = bcript.compareSync(password, userExist?.password);
    if (!isPasswordMatch) {
        throw new AppError(status.UNAUTHORIZED, "Password not match");
    }

    // if user is valided then return token
    return {
        token: null
    };
}
export const authServices = {
    registerUserIntoDB,
    loginUserFromDb
}