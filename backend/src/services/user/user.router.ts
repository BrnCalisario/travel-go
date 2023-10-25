import { User } from "@prisma/client"
import express, { Request, Response } from "express"
import { auth } from "../../middlewares/auth.middleware"
import { encryptPassword, validatePassword } from "../../utils/auth.services"
import * as UserService from "./user.service"

export const userRouter = express.Router()

userRouter.get("/", auth, async (req: Request, res: Response) => {
    try {
        const users = await UserService.getUsers()
        return res.status(200).json(users)
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
})

userRouter.post("/register", async (req: Request, res: Response) => {
    try {
        const data = req.body as User

        let encryptedPassword = await encryptPassword(data.password)

        data.password = encryptedPassword;

        const id = await UserService.registerUser(data)

        return res.status(200).json({ message: "User created successfully", id })

    } catch (error: any) {
        return res.status(500).json(error.message)
    }
})

userRouter.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body
})