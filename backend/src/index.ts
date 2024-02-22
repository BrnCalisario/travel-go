import 'dotenv/config'
import express, { Router, Request, Response } from "express"
import cors from "cors"

import { userRouter } from "./routers/user.router"
import { hotelRouter } from './routers/hotel.router'
import { reservationRouter } from './routers/reservation.router'
import { mailRouter } from './routers/mail.router'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/hotel", hotelRouter)
app.use("/api/reservation", reservationRouter)
app.use('/api/email', mailRouter)

app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));