import {Router} from "express";

import {getImgs, getImg, createImg, deleteImg, updateImg} from "../controllers";
import {upload} from "../helpers/multer";
import checkErrors from "../middlewares/check-errors";

const router = Router();

router.get('/', getImgs);

router.get('/:id', getImg);

router.post('/', [
    upload.single('file'),
    checkErrors
], createImg);

router.put('/:id', updateImg);

router.delete('/:id', deleteImg);

export default router;