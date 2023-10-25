import { User } from "@prisma/client";
import { db } from "../../config/db.server";
import { RegisterDTO, UserDTO } from "../../models/user.model";

export const getUsers = async (): Promise<UserDTO[]> => {
	return db.user.findMany({
		select: {
			id: true,
			email: true,
			fullName: true,
		},
	});
};

export const registerUser = async (user : Omit<User, "id">) : Promise<number> => {
	return db.user.create({
		data: {
			fullName : user.fullName,
			email : user.email,
			cpf : user.cpf,
			password : user.password
		}, 
		select: {
			id: true
		},
	}).then(res => res.id)
}

export const getUser = async (email: string): Promise<User> => {
	return db.user.findOne({ email: email })
}