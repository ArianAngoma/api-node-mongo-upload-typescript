import {Request, Response} from "express";

export const getImg = (req: Request, res: Response): void => {
    res.send('Hola');
}