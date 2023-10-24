export interface UserDTO {
    id: number,
    email: string,
    fullName : string
}

export interface RegisterDTO {
    email : string,
    fullName : string,
    password : string,
    cpf : string
}