import { BaseService } from "../services/base.service";
import { Request, Response, NextFunction, Router } from "express";

export type HTTPMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type EndpointFunction = (req : Request, res : Response, next : NextFunction) => Promise<any>;

export interface IRoute { 
    path : string;
    method : HTTPMethods;
    controller : (req : Request, res : Response, next : NextFunction) => Promise<any>;
    localMiddleware : ((req : Request, res : Response, next : NextFunction) => void)[];
};

export abstract class BaseController<T extends { _id: string }> {

    public router : Router = Router();
    
    public abstract path : string;

    protected abstract routes : Array<IRoute>;

    protected abstract _service: BaseService<T>;

    public setRoutes(): Router  {
        for(const route of this.routes.concat(this._baseRoutes)) {
            for(const mw of route.localMiddleware) {
                this.router.use(route.path, mw);
            };
            switch(route.method) {
                case 'GET':
                    this.router.get(route.path, route.controller);
                    break;
                case 'POST':
                    this.router.post(route.path, route.controller);
                    break;
                case 'PUT':
                    this.router.put(route.path, route.controller);
                    break;
                case 'DELETE':
                    this.router.delete(route.path, route.controller);
                    break;
                default:
                    console.log("Invalid Method")
                    break;
            };
        };
        
        return this.router;
    }

    public get = async (req: Request, res: Response<T[]>, next: NextFunction) : Promise<any> => {
        try {
            const result = await this._service.getAll();
            
            return res.status(200).send(result);

        } catch (err) {
            next(err);
        }
    }

    public getById = async (req: Request, res: Response<T | string>, next: NextFunction) => {
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

    public create = async (req: Request<{}, {}, T>, res: Response<T>, next: NextFunction) => {
        try {

            const item: T = req.body;

            const created = await this._service.create(item);

            res.status(201).json(created);

        } catch (err) {
            next(err);
        }
    }

    public update = async (req: Request<{}, {}, T>, res: Response<T>, next: NextFunction) => {
        try {

            const item: T = req.body;

            const updated = await this._service.update(item);

            res.status(200).json(updated);

        } catch (err) {
            next(err);
        }
    }

    public delete = async (req: Request, res: Response<T>, next: NextFunction) => {
        try {

            const { id } = req.params;

            const deleted = await this._service.delete(id);

            res.status(200).json(deleted);

        } catch (err) {
            next(err);
        }
    }

    private _baseRoutes : Array<IRoute> = [
        {
            path: '/',
            method: 'GET',
            controller: this.get,
            localMiddleware : []
        },
        {
            path: "/:id",
            method: "GET",
            controller: this.getById,
            localMiddleware: []
        },
        {
            path: "/",
            method: "POST",
            controller: this.create,
            localMiddleware: []
        },
        {
            path: "/:id",
            method: "DELETE",
            controller: this.delete,
            localMiddleware: [],
        },
        {
            path: "/",
            method: "PUT",
            controller: this.update,
            localMiddleware: []
        }
    ]

    // protected updateBaseRoute(_route : { path : string, method : HTTPMethods, controller : EndpointFunction }) {
    //     const routeIndex = this._baseRoutes.findIndex(r => r.path == _route.path && r.method == _route.method);

    //     if(routeIndex == -1)
    //         return;

    //     this.baseRoutes[routeIndex].controller = _route.controller;
    // }
}

