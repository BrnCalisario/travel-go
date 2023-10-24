import bcrypt from "bcryptjs"

export const EncryptPassword = async (password: string) : Promise<string> => {
    const salt = await bcrypt.genSalt(12);
    const newPassword = await bcrypt.hash(password, salt);
    return newPassword
}

export const DecryptPassword = async (passwordReceived: string, passwordDB: string) : Promise<boolean> => {
    return await bcrypt.compare(passwordReceived, passwordDB)
}