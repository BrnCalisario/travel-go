
import { ObjectId } from "mongodb";
import mongoose, { Model, Document } from "mongoose";

export interface IRepository<T> {

	create(item : T) : Promise<T>;

	update(item : T) : Promise<T | null>;

	deleteById(id : string) : Promise<T>;
	
	getById(id : string) : Promise<T | null>;

	getAll() : Promise<T[]>;

} 

export abstract class BaseRepository<T extends { _id : string }> implements IRepository<T> {

	_model : Model<T>;

	constructor(model : typeof Model) {
		this._model = model;
	}

	async getAll() : Promise<T[]> {
		return await this._model.find()
	}

	async getById(id : string) : Promise<T | null> {
		return await this._model.findById(id)
	}

	async create(item : T) : Promise<T> {
		return await this._model.create(item);
	}	

	async update(item: T): Promise<T> { 
		
		const updated = await this._model.findOneAndUpdate({ _id : new ObjectId(item._id) }, item);

		if(!updated)
			throw Error("");

		return updated;
	}

	async deleteById(id: string): Promise<T> {
		const deleted = await this._model.findOneAndDelete({ _id : id })

		if(!deleted)
			throw Error("error : " + JSON.stringify(deleted));

		return deleted;
	}
} 
