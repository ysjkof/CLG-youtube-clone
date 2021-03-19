// make 3rd. 2.8강.
import express from "express";
import { coursesHome, coursesMine, coursesNew } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get("/", coursesHome)
coursesRouter.get("/new", coursesNew)
coursesRouter.get("/mine", coursesMine)

export default coursesRouter;