import express, { Express } from "express";

import cors from "cors";
import { container } from "tsyringe";
import { controllerList } from "./config/injections";

export const setupConfigs = (app : Express) : Express => {
    
    app.use(cors())
    app.use(express.json()) 

    return app;
}

export const setupControllers = (app : Express) : Express => {

    for(var ctrl of controllerList) {
        app.use(ctrl.path, ctrl.setRoutes())
    }
    
    return app;
}

