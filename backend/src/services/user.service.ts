import { IUser } from "../models/user.model";
import UserRepository from "../repository/user/user.repository";
import { BaseService } from "./base.service";

export class UserService extends BaseService<IUser> {
    constructor() {
        super(new UserRepository())
    }
}