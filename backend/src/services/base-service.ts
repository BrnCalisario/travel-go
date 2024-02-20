import { PrismaClient } from '@prisma/client'
import 'reflect-metadata'

export interface IBaseService<TModel, TId> 
{
    getAll() : Promise<TModel[]>
    
    get(id : TId) : Promise<TModel>

    create(item : TModel) : Promise<TModel>

    remove(id : TId) : Promise<TModel>

    update(item : TModel) : Promise<TModel>
}

export abstract class BaseService<TRepository, TModel, TId> implements IBaseService<TModel, TId>
{
    protected entityRepository : TRepository;

    constructor(repository : TRepository) {
        this.entityRepository = repository;
    }
    getAll(): Promise<TModel[]> {

        throw new Error('Method not implemented.')
        
    }
    get(id: TId): Promise<TModel> {
        throw new Error('Method not implemented.')
    }
    create(item: TModel): Promise<TModel> {
        throw new Error('Method not implemented.')
    }
    remove(id: TId): Promise<TModel> {
        throw new Error('Method not implemented.')
    }
    update(item: TModel): Promise<TModel> {
        throw new Error('Method not implemented.')
    }
} 