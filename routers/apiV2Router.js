// make 3rd. 2.8강.
import express from "express";
import { v2Edit, v2Remove } from "../controllers/apiController";

const apiV2Router = express.Router();

apiV2Router.get("/remove", v2Remove);
apiV2Router.get("/edit", v2Edit);

export default apiV2Router;