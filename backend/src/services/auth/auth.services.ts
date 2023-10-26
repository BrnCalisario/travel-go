import bcrypt from "bcryptjs"
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import * as UserService from "../user/user.service"

interface ValidateResponse {
    isValid : boolean,
    userId : number
}

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
        return { isValid: false, userId : 0 };

    return  { isValid: await bcrypt.compare(passwordReceived, user.password), userId: user.id }
}

export const generateToken = async (userId: number): Promise<string> => {
    return jwt.sign({ userId: userId }, SECRET_KEY)
} 