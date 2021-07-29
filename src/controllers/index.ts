import {Request, Response} from "express";
import {upload} from '../helpers/multer';

export const getImg = async (req: Request, res: Response): Promise<void> => {
    res.send('Hola');
}

export const createImg = async (req: Request, res: Response): Promise<void> => {
    console.log(req.file);
    res.send('Hola');
}