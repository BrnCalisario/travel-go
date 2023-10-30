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

// export const createHotel = async ( hotel : HotelDTO ) : Promise<number> => {
//     return db.hotel.create({
//         data : {
//             hotelName: hotel.hotelName,
//             image: hotel.image,
//             imageKey : hotel.imageKey
//         },
//         select: {
//             id: true
//         }
//     }).then(res => res.id)
// }