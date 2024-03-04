import 'dotenv/config'
import express from "express"
import "reflect-metadata"
import { container } from 'tsyringe';

import connectDB from './config/db.server'
import HotelController from './controller/hotel.controller';
import UserController from './controller/user.controller';
import { HotelService } from './services/hotel.service';

import { setupConfigs, setupControllers } from './setup';
import { UserService } from './services/user.service';

const PORT = process.env.PORT;

const app = express()

connectDB();

// SETUP
setupConfigs(app)

setupControllers(app);


app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));