import { inject, injectable } from "tsyringe";
import { IUser } from "../models/user.model";
import { BaseService } from "../services/base.service";
import { BaseController, IRoute } from "./base.controller";

@injectable()
export default class UserController extends BaseController<IUser> {
        
    public path: string = "/api/User";
    
    protected routes: IRoute[] = [];

    constructor(@inject("UserService") protected _service: BaseService<IUser>) {
        super();
     }
}