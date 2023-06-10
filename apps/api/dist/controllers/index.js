"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services"));
const exceptions_1 = require("../exceptions");
const handler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city: cityName, product: productName } = req.query;
        const city = yield services_1.default.getCity(cityName.toLowerCase());
        if (!city)
            throw new exceptions_1.NotFoundError(`A city with ${cityName} does not exist`);
        const product = yield services_1.default.getProduct(productName.toLowerCase());
        if (!product)
            throw new exceptions_1.NotFoundError(`A product with ${productName} does not exist`);
        const { brochures, page } = yield services_1.default.getBrochure({
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
    }
    catch (error) {
        return next(error);
    }
});
exports.default = handler;
