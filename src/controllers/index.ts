import {Request, Response} from "express";
import Image from '../models/images';

export const getImgs = async (req: Request, res: Response): Promise<Response> => {
    const imgs = await Image.find();
    return res.json(imgs);
}

export const getImg = async (req: Request, res: Response): Promise<Response> => {
    const img = await Image.findById(req.params.id);
    return res.json(img);
}

export const createImg = async (req: Request, res: Response): Promise<Response> => {
    const {title, description} = req.body;
    const newImg = {
        title,
        description,
        img: req.file!.path
    };
    const img = new Image(newImg);
    await img.save();
    return res.json({img});
}