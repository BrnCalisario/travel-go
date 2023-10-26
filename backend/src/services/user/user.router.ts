import { User } from "@prisma/client";
import express, { Request, Response } from "express";
import { auth } from "../../middleware/auth.middleware";
import { encryptPassword, validatePassword } from "../auth/auth.services";
import * as UserService from "./user.service";

export const userRouter = express.Router();

userRouter.get("/", auth, async (req: Request, res: Response) => {
	try {
		const users = await UserService.getUsers();
		return res.status(200).json(users);
	} catch (error: any) {
		return res.status(500).json(error.message);
	}
});

userRouter.post("/signup", async (req: Request, res: Response) => {
	try {
		const data = req.body as User;

		let encryptedPassword = await encryptPassword(data.password);

		data.password = encryptedPassword;

		const id = await UserService.registerUser(data);

		return res
			.status(200)
			.json({ message: "User created successfully", id });
	} catch (error: any) {
		return res.status(500).json(error.message);
	}
});

userRouter.post("/login", async (req: Request, res: Response) => {
	const { password, email } = req.body;

    try 
    {
        const valid = await validatePassword(password, email)

        if(!valid)
            return res.status(401).json({ message: "Bad Auth"})

        return res.status(200).json({ message : 'Authenticated', token: "abcd" })

    } catch( error : any ) {
        return res.status(500).json(error.message);
    }

});
