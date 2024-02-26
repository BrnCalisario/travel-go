
import mongoose, { Model, Document } from "mongoose";

export abstract class BaseRepository<T> {

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
