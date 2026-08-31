import type { NextFunction, Request, Response } from "express";
import productService from "../services/product.service.js";
import type { IProduct } from "../types.js";

interface ProductParams {
  id: string;
}

function getProducts(_request: Request, response: Response<IProduct[]>): void {
  response.json(productService.getProducts());
}

function getProduct(request: Request<ProductParams>, response: Response<IProduct>, next: NextFunction): void {
  try {
    response.json(productService.getProduct(request.params.id));
  } catch (error: unknown) {
    next(error);
  }
}

function createProduct(
  request: Request<Record<string, never>, IProduct, unknown>,
  response: Response<IProduct>,
  next: NextFunction,
): void {
  try {
    response.status(201).json(productService.createProduct(request.body));
  } catch (error: unknown) {
    next(error);
  }
}

function updateProduct(
  request: Request<ProductParams, IProduct, unknown>,
  response: Response<IProduct>,
  next: NextFunction,
): void {
  try {
    response.json(productService.updateProduct(request.params.id, request.body));
  } catch (error: unknown) {
    next(error);
  }
}

function deleteProduct(
  request: Request<ProductParams>,
  response: Response,
  next: NextFunction,
): void {
  try {
    productService.deleteProduct(request.params.id);
    response.status(204).send();
  } catch (error: unknown) {
    next(error);
  }
}

export default { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
