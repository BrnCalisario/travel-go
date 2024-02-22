import express, { Request, Response } from "express"
import { auth } from "../middleware/auth.middleware"
import * as ReservationService from "../services/reservation/reservation.service"
import { ReservationDTO } from "../models/reservation.model";

export const reservationRouter = express.Router()

reservationRouter.post("/create", async (req: Request, res: Response) => {
    const data = req.body as ReservationDTO

    data.checkIn = new Date(data.checkIn)
    data.checkOut = new Date(data.checkOut)
    try {
        const id = await ReservationService.createReservation(data)
        return res
            .status(200)
            .json({ message: "Reservation made successfully", id })
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
})