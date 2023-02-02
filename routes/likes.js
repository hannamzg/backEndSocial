import express  from "express";
import {  getLikes,AddLike,deleteLike} from "../controllers/like.js";

const router = express.Router();

router.get("/",getLikes)
router.post("/",AddLike)
router.delete("/",deleteLike)

export default router