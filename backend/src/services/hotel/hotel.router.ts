import { Hotel } from "@prisma/client"
import express, { Request, Response} from "express"
import * as HotelService from "./hotel.service"
// import upload from "./upload.service"

export const hotelRouter = express.Router()

hotelRouter.get("/", async (req: Request, res: Response) => {
    try {
        const hotels = await HotelService.getHotels()
        return res.status(200).json(hotels)
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
})

hotelRouter.post("/create", async (req: Request, res : Response) => {
    // try {
        
    // }
})