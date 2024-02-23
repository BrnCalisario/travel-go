import express, { Request, Response } from "express"
import Mail from "../services/email/mail";

export const mailRouter = express.Router()

mailRouter.post("/", async (req: Request, res: Response) => {
    const message = Object.assign({}, req.body);

    Mail.to = message.to;
    Mail.subject = message.subject;
    Mail.message = message.message;
    let result = Mail.sendMail();

    res.status(200).json({ 'result': result })
})