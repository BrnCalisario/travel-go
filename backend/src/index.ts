import 'dotenv/config'
import express, { Router, Request, Response } from "express"
import cors from "cors"
import connectDB from './config/db.server'

import { userRouter } from "./routers/user.router"
import { hotelRouter } from './routers/hotel.router'
import { reservationRouter } from './routers/reservation.router'
import { mailRouter } from './routers/mail.router'
import { IUser } from './models/user.model'
import UserRepository from './repository/user/user.repository'


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
    
    const user = req.body as IUser;

    const result = await userRepo.create(user);

    res.status(200).send(result);
})

app.put("/user/:id",  async (req : Request, res : Response) => {

    const updated = req.body as IUser;

    updated._id = req.params.id;

    const result = await userRepo.update(updated);

    res.status(200).send(result);
})

app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));