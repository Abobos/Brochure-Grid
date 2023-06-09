import { NextFunction, Request, Response } from "express";
import apiCLient from "../services";
import { NotFoundError } from "../exceptions";
import { IQueryParameters } from "./types";

const handler = async (
  req: Request<never, never, never, IQueryParameters>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { city: cityName, product: productName } = req.query;

    const city = await apiCLient.getCity(cityName);

    if (!city)
      throw new NotFoundError(`A city with ${cityName} does not exist`);

    const product = await apiCLient.getProduct(productName);

    if (!product)
      throw new NotFoundError(`A product with ${productName} does not exist`);

    const { brochures, page } = await apiCLient.getBrochure({
      lat: 4.534,
      lng: 4.66,
      query: productName,
    });

    return res.status(200).json({
      data: {
        city,
        product,
        brochures,
        page,
      },
    });
  } catch (error) {
    return next(error);
  }
};

export default handler;
