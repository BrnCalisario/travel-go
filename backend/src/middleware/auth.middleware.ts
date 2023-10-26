import { NextFunction, Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";


const SECRET_KEY : string | undefined = process.env.JWT_SECRET

if(!SECRET_KEY)
    throw new Error('SECRET KEY NOT PROVIDED')

export interface CustomRequest extends Request {
    token : string | JwtPayload
}

export const auth = async (req : Request, res : Response, next : NextFunction) =>
{
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')

        if(!token)
            throw new Error()



        const decoded = jwt.verify(token, SECRET_KEY);

        (req as CustomRequest).token = decoded;

        next()
    } catch (err) {
        res.status(401).send("Bad Auth")
    }
}