import express, { Request, Response } from "express"
import { request } from "http"

import * as UserService from "./user.service"

export const userRouter = express.Router()

userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await UserService.getUsers()
        return res.status(200).json(users)
    } catch (error : any) {
       return res.status(500).json(error.message)
    }
})

userRouter.post("/", async (req: Request, res: Response) => {
    try {
        const { fullName, email, cpf, password } = req.body

        const id = await UserService.login({ fullName, email, cpf, password })

        return res.status(200).json({ message : "User created successfully", id })
    } catch (error : any) {
        return res.status(500).json(error.message)
    }
})