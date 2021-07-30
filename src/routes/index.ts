import {Router} from "express";

import {getImgs, getImg, createImg} from "../controllers";
import {upload} from "../helpers/multer";
import checkErrors from "../middlewares/check-errors";

const router = Router();

router.get('/', getImgs);

router.get('/:id', getImg);

router.post('/', [
    upload.single('file'),
    checkErrors
], createImg);

export default router;