import {Router} from "express";

import {getImg, createImg} from "../controllers";
import {upload} from "../helpers/multer";
import checkErrors from "../middlewares/check-errors";

const router = Router();

router.get('/', getImg);

router.post('/', [
    upload.single('file'),
    checkErrors
], createImg);

export default router;