import { Prisma, PrismaClient } from "@prisma/client";
import { db } from "../config/db.server";
import { stringify } from "querystring";
import { ModelName } from "aws-sdk/clients/sagemaker";

type ModelNames = Prisma.ModelName;

export type PrismaModel = {
    [M in ModelNames]: Exclude<
        Awaited<ReturnType<PrismaClient[Uncapitalize<M>]["findUnique"]>>,
    null>
}

export default interface IRepository<T extends ModelNames, TId> 
{
    create(item : T) : Promise<T>;
    find(id : TId) : Promise<T>;
    findAll() : Promise<T[]>;
}

export default abstract class BaseRepository<T extends keyof PrismaModel, TId> implements IRepository<T, TId>
{

}