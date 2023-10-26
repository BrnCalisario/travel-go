import { User } from "@prisma/client";
import { db } from "../src/config/db.server";

console.log("Seeding");

async function seed() {
	await Promise.all(
		getAdmins().map((user) => {
			return db.user.create({
				data: {
					email: user.email,
					password: user.password,
					cpf: user.cpf,
					isAdmin: user.isAdmin,
					fullName: user.fullName,
				},
			});
		})
	);
}

try
{
    seed();
} catch { }

type AdminUser = {
	email: string;
	password: string;
	fullName: string;
	cpf: string;
	isAdmin: boolean;
};

function getAdmins(): Array<AdminUser> {
	return [
		{
			email: "admin@admin",
			password:
				"$2a$12$mhrOIV4cljFznHFNSqy.8.tBYBAUeeUmJN.M5HGazDRurbmtTkljO",
			fullName: "admin",
			cpf: "cpf",
			isAdmin: true,
		},
	];
}
