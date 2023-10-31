import { Hotel } from "@prisma/client"
import express, { Request, Response} from "express"
import { auth, authAdmin } from "../../middleware/auth.middleware"
import { HotelDTO } from "../../models/hotel.model"
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
    try 
    {
        const data = req.body as HotelDTO
    
        if(!data.hotelName || !data.cep)
            throw new Error()
    
        const result = await HotelService.createHotel(data)
    
        return res.status(200).json({ id : result })

    } catch (error : any) {
        
        console.log("yea " +error)
        return res.status(500).json(error.message)
    }

})

hotelRouter.get("/amenities", async (req: Request, res : Response) => {
    try {
        const amenities = await HotelService.getHotelAmenities()
        return res.status(200).json(amenities)
    } catch (error : any) {
        return res.status(500).json(error.message)
    }
} )