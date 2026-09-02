import type { RequestHandler } from "express";
import productService from "../services/product.service.js";
import type { IProduct } from "../types.js";
import type { EmptyBody, EmptyParams, EmptyQuery, IdParams, ProductBody } from "../types/http.types.js";

const getProducts: RequestHandler<EmptyParams, IProduct[], EmptyBody, EmptyQuery> = (_request, response) => {
  response.json(productService.getProducts());
};

const getProduct: RequestHandler<IdParams, IProduct, EmptyBody, EmptyQuery> = (request, response, next) => {
  try {
    response.json(productService.getProduct(request.params.id));
  } catch (error: unknown) {
    next(error);
  }
};

const createProduct: RequestHandler<EmptyParams, IProduct, ProductBody, EmptyQuery> = (request, response, next) => {
  try {
    response.status(201).json(productService.createProduct(request.body));
  } catch (error: unknown) {
    next(error);
  }
};

const updateProduct: RequestHandler<IdParams, IProduct, ProductBody, EmptyQuery> = (request, response, next) => {
  try {
    response.json(productService.updateProduct(request.params.id, request.body));
  } catch (error: unknown) {
    next(error);
  }
};

const deleteProduct: RequestHandler<IdParams, void, EmptyBody, EmptyQuery> = (request, response, next) => {
  try {
    productService.deleteProduct(request.params.id);
    response.status(204).send();
  } catch (error: unknown) {
    next(error);
  }
};

export default { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
