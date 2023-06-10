import { Router } from "express";

import handler from "../controllers";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Welcome to Brochure Grid API Service");
});

routes.get("/city-product-grid", handler);

export default routes;
