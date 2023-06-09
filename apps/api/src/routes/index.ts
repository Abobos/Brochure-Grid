import { Router } from "express";

import handler from "../controllers";

const routes = Router();

routes.get("/city-product-grid", handler);

export default routes;
