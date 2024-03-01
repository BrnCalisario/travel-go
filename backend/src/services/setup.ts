import express, { Express } from "express";

import { UserController, extractRouter } from "../controller/user.controller";
import cors from "cors";

export const setupConfigs = (app : Express) : Express => {
    
    app.use(cors())
    app.use(express.json()) 

    return app;
}

export const setupControllers = (app : Express) : Express => {

    // Colocar novas controllers aqui
    app.use(extractRouter(new UserController()));

    return app;
}

