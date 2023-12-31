import bcrypt from "bcryptjs"
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { ValidateResponse } from "../../models/user.model";
import * as UserService from "../user/user.service"

const SECRET_KEY: string | undefined = process.env.JWT_SECRET

if (!SECRET_KEY)
    throw new Error('SECRET KEY NOT PROVIDED')


export const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(12);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword
}

export const validatePassword = async (passwordReceived: string, userEmail: string): Promise<ValidateResponse> => {
    const user = await UserService.getUser(userEmail)

    if (!user)
        return { isValid: false, userId : 0, isAdmin : false };

    return  { isValid: await bcrypt.compare(passwordReceived, user.password), userId: user.id, isAdmin : user.isAdmin }
}

export const generateToken = async (userId: number, isAdmin : boolean): Promise<string> => {
    return jwt.sign({ userId, isAdmin  }, SECRET_KEY)
} 