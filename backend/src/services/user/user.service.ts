
import User, { IUser } from "../../models/user.model";

import mongoose, { Model, Document } from "mongoose";

abstract class Repository<T> {

	_schema : Model<T>;

	constructor(model : typeof Model) {
		this._schema = model;
	}

	async getAll() : Promise<T[]> {
		return await this._schema.find()
	}

	async getById(id : string) : Promise<T | null> {
		return await this._schema.findById(id)
	}

	async create(item : T) : Promise<T> {
		return await this._schema.create(item);
	}
} 

class UserRepository<IUser> extends Repository<IUser> {

	constructor() {
		super(User);
	}
}

export default UserRepository;


// import { User } from "@prisma/client";
// import { db } from "../../config/db.server";
// import { UserDTO } from "../../models/user.model";

// export const getUsers = async (): Promise<UserDTO[]> => {
// 	return db.user.findMany({
// 		select: {
// 			id: true,
// 			email: true,
// 			fullName: true,
// 		},
// 	});
// };

// export const registerUser = async (user : Omit<User, "id">) : Promise<number> => {
// 	return db.user.create({
// 		data: {
// 			fullName : user.fullName,
// 			email : user.email,
// 			cpf : user.cpf,
// 			password : user.password,
// 			isAdmin : false,
// 		}, 
// 		select: {
// 			id: true
// 		},
// 	}).then(res => res.id)
// }

// export const getUser = async (email: string): Promise<User | null> => {
// 	const query : User | null = await db.user.findUnique({
// 		where: {
// 			email : email
// 		}
// 	})

// 	return query
// }