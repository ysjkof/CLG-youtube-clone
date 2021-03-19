// make 3rd. 2.8강.
import express from "express";
import { v1Buy, v1Refund } from "../controllers/apiController";

const apiV1Router = express.Router();

apiV1Router.get("/buy", v1Buy);
apiV1Router.get("/refund", v1Refund)

export default apiV1Router;