import { TUser } from "../user/user.interface"
import { UserModel } from "../user/user.schema"

// create user into db
const registerUserIntoDB = async (payload: TUser) => {
    const result = await UserModel.create(payload);
    return result;
}


export const authServices = {
    registerUserIntoDB
}