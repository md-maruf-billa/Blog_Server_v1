export type TUser = {
    name: string,
    email: string,
    password: string,
    role: "admin" | "user",
    isBlocked?: boolean,
    isDeleted?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
}

