import path from 'path';
import fs from 'fs';
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

export const updateImg = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const {title, description} = req.body;
    const img = await Image.findByIdAndUpdate(id, {
        title, description
    }, {new: true});
    return res.json(img);
}

export const deleteImg = async (req: Request, res: Response): Promise<Response> => {
    // Eliminar Image de la DB
    const img = await Image.findByIdAndRemove(req.params.id);

    // Elimar Image del servidor
    await fs.unlinkSync(path.resolve(img!.img));
    return res.json(img);
}