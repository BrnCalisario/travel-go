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

	await Promise.all(
		getAmenities().map((am) => {
			return db.amenity.create({
				data: { amenity: am.name },
			});
		})
	);

	await Promise.all(
		getRoomTypes().map((rt) => {
			return db.roomType.create({
				data: { type: rt.name, capacity: rt.capacity },
			});
		})
	);
}

try {
	seed();
} catch {}

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

function getAmenities(): Array<{ name: string }> {
	return [
		{ name: "Free Wi-fi" },
		{ name: "Pool" },
		{ name: "Air conditioning" },
	];
}

function getRoomTypes(): Array<{ name: string, capacity : number }> {
	return [
		{ name: "Big VIP", capacity : 8 },
		{ name: "VIP", capacity : 4 },
		{ name: "Big Normal", capacity : 6 },
		{ name: "Normal", capacity : 4 },
	];
}
