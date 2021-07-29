import path from 'path';
import multer from 'multer';
import {Request} from "express";
import {v4 as uuidv4} from 'uuid';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req: Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) => {
        callback(null, `${uuidv4() + path.extname(file.originalname)}`)
    }
});

export const upload = multer({
    storage,
    fileFilter: (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
        const filetypes = /jpeg|jpg|png|gif/;

        // Validar extensión
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        // Validar tipo de archivo
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) return callback(null, true);
        else callback(new Error('Solo imágenes'));

    }
})




