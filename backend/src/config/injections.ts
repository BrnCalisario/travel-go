import { container } from "tsyringe";
import HotelController from "../controller/hotel.controller";
import UserController from "../controller/user.controller";
import User, { IUser } from "../models/user.model";
import UserRepository from "../repository/user/user.repository";
import { HotelService } from "../services/hotel.service";
import { UserService } from "../services/user.service";
import { BaseRepository } from "../repository/repository";
import { BaseService } from "../services/base.service";
import { IHotel } from "../models/hotel.model";
import HotelRepository from "../repository/hotel/hotel.repository";

container.register<BaseRepository<IUser>>("UserRepository", { useClass : UserRepository });
container.register<BaseService<IUser, UserRepository>>("UserService", { useClass : UserService });

container.register<BaseRepository<IHotel>>("HotelRepository", { useClass : HotelRepository });
container.register<BaseService<IHotel, HotelRepository>>("HotelService", { useClass : HotelService });

export const userCtrl = container.resolve(UserController);
export const hotelCtrl = container.resolve(HotelController);

export const controllerList = [userCtrl, hotelCtrl];
