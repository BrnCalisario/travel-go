import 'dotenv/config'
import express from "express"
import "reflect-metadata"
import { container } from 'tsyringe';

import connectDB from './config/db.server'
import HotelController from './controller/hotel.controller';
import UserController from './controller/user.controller';
import { HotelService } from './services/hotel.service';

import { setupConfigs, setupControllers } from './services/setup';
import { UserService } from './services/user.service';

container.register("UserService", {
    useClass : UserService
})

container.register("HotelService", {
    useClass: HotelService
})

const userCtrl = container.resolve(UserController);
const hotelCtrl = container.resolve(HotelController);

const PORT = process.env.PORT;

const app = express()

connectDB();

// SETUP
setupConfigs(app)

setupControllers(app, [userCtrl, hotelCtrl]);


app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));