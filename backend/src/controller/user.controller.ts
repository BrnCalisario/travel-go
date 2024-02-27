export abstract class BaseControler {
    
    protected abstract getImpl(
        req : Request, res : Response
    ) : Promise<void | any>;
}