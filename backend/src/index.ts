import 'dotenv/config'
import express, { Router, Request, Response } from "express"
import cors from "cors"

import { userRouter } from "./services/user/user.router"
import { hotelRouter } from './services/hotel/hotel.router'
import { reservationRouter } from './services/reservation/reservation.router'

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/hotel", hotelRouter)
app.use("/api/reservation", reservationRouter)


app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT))
