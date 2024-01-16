import { Router } from "express";
import { 
    home
} from "../controllers/user.controller.js";

const router = Router()

router.route("/").get(home)
export default router