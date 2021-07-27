import {Router} from "express";

import {getImg} from "../controllers";

const router = Router();

router.get('/', getImg);

export default router;