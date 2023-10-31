export abstract class RequestError extends Error {

    statusCode : number;

    constructor(message : string, statusCode : number)  {
        super(message)
        this.name = this.constructor.name
        this.statusCode = statusCode
    }
}

export class InternalError extends RequestError
{
    constructor(message : string  = 'Server Died') {
        super(message, 400)
    }
}