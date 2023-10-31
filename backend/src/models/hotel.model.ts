export interface HotelDTO
{
    hotelName : string,
    cep : string,
    number : string,
    state : string,
    city : string,
    amenities : number[]
}

export interface AmenityDTO
{
    id: number
    amenity : string,

}