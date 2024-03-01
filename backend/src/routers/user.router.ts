import { Router } from "express";
import { UserController } from "../controller/user.controller";

export const userRouter = Router();

const controller = new UserController();

const BASE_ROUTE = "/api/User"

userRouter.get(BASE_ROUTE, controller.get);

userRouter.get(`${BASE_ROUTE}/:id`, controller.getById);

userRouter.post(BASE_ROUTE, controller.create);

userRouter.delete(`${BASE_ROUTE}/:id`, controller.delete);

userRouter.patch(BASE_ROUTE, controller.update);