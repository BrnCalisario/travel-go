import 'dotenv/config'
import express, { Router, Request, Response } from "express"
import cors from "cors"
import connectDB from './config/db.server'
import UserRepository from "./services/user/user.service"

import { userRouter } from "./routers/user.router"
import { hotelRouter } from './routers/hotel.router'
import { reservationRouter } from './routers/reservation.router'
import { mailRouter } from './routers/mail.router'


const userRepo = new UserRepository();

const PORT = process.env.PORT;

const app = express()

connectDB();

app.use(cors())
app.use(express.json())


app.get("/user", async (req : Request, res : Response) =>{
    let result = await userRepo.getAll();
    res.status(200).send(result);
})

app.post("/user", async (req : Request, res : Response) => {
    
    let user = req.body.user;
    
    res.status(200).send(user);
})

app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));