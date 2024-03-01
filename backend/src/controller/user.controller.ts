import { IUser } from "../models/user.model";
import { UserService } from "../services/user.service";
import { BaseControler } from "./base.controller";

export class UserController extends BaseControler<IUser> {

    constructor() {
        super(new UserService());
    }
}