export interface HotelDTO
{
    hotelName : string,
    cep : string,
    number : string,
    state : string,
    city : string,
    price: number,
    amenities : number[]
}

export interface AmenityDTO
{
    id: number
    amenity : string,
}