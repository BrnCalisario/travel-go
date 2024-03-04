import { BaseRepository, IRepository } from "../repository/repository";

export interface IService<T> {

    create(item : T) : Promise<T>;

    update(item : T) : Promise<T>;

    delete(id : string)  : Promise<T>;

    getById(id : string) : Promise<T | null>;

    getAll() : Promise<T[]>;
}

export abstract class BaseService<T extends { _id : string}, TRepository extends IRepository<T>> implements IService<T>  {
    
    protected abstract _repository : TRepository
    
    async getAll(): Promise<T[]> {
        return await this._repository.getAll();
    }

    async create(item: T): Promise<T> {
        return await this._repository.create(item);
    }
    
    async update(item: T): Promise<T> {
        return await this._repository.update(item);
    }

    async delete(id: string): Promise<T> {
        return await this._repository.deleteById(id);
    }

    async getById(id: string): Promise<T | null> {
        return await this._repository.getById(id);
    }
} 
