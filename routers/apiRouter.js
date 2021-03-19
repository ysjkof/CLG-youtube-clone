// make 3rd. 2.8강.
import express from "express";
import { apiDocumentation, apiHome } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get("/", apiHome);
apiRouter.get("/documentation", apiDocumentation);

export default apiRouter;