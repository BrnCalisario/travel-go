import 'dotenv/config'
import express, { Router, Request, Response } from "express"
import cors from "cors"
import connectDB from './config/db.server'

import { userRouter } from "./routers/user.router"

import UserRepository from './repository/user/user.repository'

const userRepo = new UserRepository();

const PORT = process.env.PORT;

const app = express()

connectDB();

app.use(cors())
app.use(express.json())

app.use(userRouter);


app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));