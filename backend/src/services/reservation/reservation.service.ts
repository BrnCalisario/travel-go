import { Reservation } from "@prisma/client"
import { db } from "../../config/db.server"
import { ReservationDTO } from "../../models/reservation.model"



export const createReservation = async (reservation: ReservationDTO): Promise<number> => {
    return db.reservation.create({
        data: {
            checkIn: reservation.checkIn,
            checkOut: reservation.checkOut,
            hotelId: reservation.hotelId,
            userId: reservation.userId
        },
        select: {
            id: true
        }
    }).then(res => res.id)
}