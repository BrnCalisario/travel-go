import bcrypt from "bcryptjs"

import * as UserService from "../user/user.service"


export const encryptPassword = async (password: string) : Promise<string> => {
    const salt = await bcrypt.genSalt(12);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword
}

export const validatePassword = async (passwordReceived: string, userEmail: string) : Promise<boolean> => {
    const user = await UserService.getUser(userEmail)
    return await bcrypt.compare(passwordReceived, user.password)
} 