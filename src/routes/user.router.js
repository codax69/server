import { Router } from "express";
import { userResponse } from "../controller/api.js";

const router = Router();

router.route("/res").get(userResponse);

export default router;
