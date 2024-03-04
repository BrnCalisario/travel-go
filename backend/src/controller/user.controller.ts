import { inject, injectable } from "tsyringe";
import { IUser } from "../models/user.model";
import { BaseService } from "../services/base.service";
import { UserService } from "../services/user.service";
import { BaseController, IRoute } from "./base.controller";

@injectable()
export default class UserController extends BaseController<IUser, UserService> {
        
    public path: string = "/api/User";
    
    protected routes: IRoute[] = [];

    constructor(@inject("UserService") protected _service: UserService) {
        super();
     }
}