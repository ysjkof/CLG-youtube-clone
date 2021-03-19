// make 3rd. 2.8강.
import express from "express";
import { confirmAccount, home, join, login } from "../controllers/globalController";
// import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/confirm-account", confirmAccount);

export default globalRouter;