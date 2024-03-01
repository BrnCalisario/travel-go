import { BaseService } from "../services/base.service";
import { Request, Response, NextFunction } from "express";

export abstract class BaseControler<T extends { _id: string }> {

    _service: BaseService<T>;

    constructor(service: BaseService<T>) {
        this._service = service;
    }

    public async get(_: Request, res: Response<T[]>, next: NextFunction) {
        try {

            const result = await this._service.getAll();

            return res.status(200).json(result);

        } catch (err) {
            next(err);
        }
    }

    public async getById(req: Request, res: Response<T | string>, next: NextFunction) {
        try {

            const { id } = req.params;

            const result: T | null = await this._service.getById(id);

            if (!result)
                return res.status(404).send("Not Found");

            res.status(200).send(result);

        } catch (err) {
            next(err);
        }
    }

    public async create(req: Request<{}, {}, T>, res: Response<T>, next: NextFunction) {
        try {

            const item: T = req.body;

            const created = await this._service.create(item);

            res.status(201).json(created);

        } catch (err) {
            next(err);
        }
    }

    public async update(req: Request<{}, {}, T>, res: Response<T>, next: NextFunction) {
        try {

            const item: T = req.body;

            const updated = await this._service.update(item);

            res.status(200).json(updated);

        } catch (err) {
            next(err);
        }
    }

    public async delete(req: Request, res: Response<T>, next: NextFunction) {
        try {

            const { id } = req.params;

            const deleted = await this._service.delete(id);

            res.status(200).json(deleted);

        } catch (err) {
            next(err);
        }
    }
}