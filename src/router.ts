import { Router } from "express";
import { studentController } from './controller/index'
const router = Router();

router.get('/',studentController)

export default router;