import { BaseService } from "../services/base.service";
import * as express from 'express'

export abstract class BaseControler<T extends { _id : string }> {

    _service : BaseService<T>;

    constructor(service : BaseService<T>) {
        this._service = service;
    }

    protected async get(req : Request, res : Response) {

        const body = req.body as unknown as T;
    }
}