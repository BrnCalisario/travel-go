import { Router } from "express";
import { IUser } from "../models/user.model";
import { UserService } from "../services/user.service";
import { BaseControler } from "./base.controller";

export class UserController extends BaseControler<IUser> {

    constructor() {
        super(new UserService(), "/api/User");
    }
}

export function extractRouter<T extends { _id : string}>(controller : BaseControler<T>){

    const router = Router();

    router.get(controller.BASE_URL, controller.get);
    
    router.get(`${controller.BASE_URL}`, controller.getById);

    router.post(controller.BASE_URL, controller.create);

    router.delete(`${controller.BASE_URL}/:id`, controller.delete);

    router.patch(controller.BASE_URL, controller.delete);

    return router;
}