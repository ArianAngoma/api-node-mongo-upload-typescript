import {Request, Response} from "express";
import Image from '../models/images';

export const getImg = async (req: Request, res: Response): Promise<void> => {
    res.send('Hola');
}

export const createImg = async (req: Request, res: Response): Promise<void> => {
    const {title, description} = req.body;
    const newImg = {
        title,
        description,
        img: req.file!.path
    };
    const img = new Image(newImg);
    await img.save();
    res.json({img});
}