import express, { Express } from "express";

import cors from "cors";
import { container } from "tsyringe";
import UserRepository from "../repository/user/user.repository";
import { BaseController } from "../controller/base.controller";
import { IUser } from "../models/user.model";

export const setupConfigs = (app : Express) : Express => {
    
    app.use(cors())
    app.use(express.json()) 

    return app;
}

export const setupControllers = (app : Express, controllerList : BaseController<any>[]) : Express => {

    for(var ctrl of controllerList) {
        app.use(ctrl.path, ctrl.setRoutes())
    }

    // Colocar novas controllers aqui
    // app.use(userCtrl.path, userCtrl.setRoutes());
    
    const myBar = container.resolve(UserRepository);

    return app;
}

