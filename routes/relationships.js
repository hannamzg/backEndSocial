import express  from "express";
import {  getRelationships,AddRelationships,deleteRelationships} from "../controllers/relationship.js";

const router = express.Router();

router.get("/",getRelationships)
router.post("/",AddRelationships)
router.delete("/",deleteRelationships)

export default router