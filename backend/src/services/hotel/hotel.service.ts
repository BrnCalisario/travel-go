import { Hotel } from "@prisma/client"
import { db } from "../../config/db.server"
import { AmenityDTO, HotelDTO } from "../../models/hotel.model"


export const getHotels = async (): Promise<any[]> => {
    return db.hotel.findMany({
        select: {
            hotelName: true,
            city: true,
            number : true,
            price : true,
        }
    },)
}

export const getHotelAmenities = async () : Promise<AmenityDTO[]> => {
    return db.amenity.findMany({
        select: {
            id: true,
            amenity: true
        }
    })
}

export const createHotel = async ( hotel : HotelDTO ) : Promise<number> => {
    var id : number = await db.hotel.create({
        data : {
            hotelName: hotel.hotelName,
            cep: hotel.cep,
            number: hotel.number,
            state: hotel.state,
            city: hotel.city,
            price: hotel.price
        },
        select: {
            id: true
        }
    }).then(res => res.id)


    await Promise.all(
        hotel.amenities.map(am => {
            db.hotelAmenities.create({
                data : { 
                    amenityId : am,
                    hotelId : id
                }
            })
        })
    )

    return id
}
