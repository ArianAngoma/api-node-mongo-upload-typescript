import {Request, Response, NextFunction} from "express";

const checkError =  (err: Error, req: Request, res: Response, next: NextFunction) =>  {
    if (err) return res.status(404).send({error: err.message});
}

export default checkError;