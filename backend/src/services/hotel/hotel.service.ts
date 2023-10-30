import { Hotel } from "@prisma/client"
import { db } from "../../config/db.server"
import { HotelDTO } from "../../models/hotel.model"


export const getHotels = async (): Promise<HotelDTO[]> => {
    return db.hotel.findMany({
        select: {
            hotelName: true,
        }
    },)
}
