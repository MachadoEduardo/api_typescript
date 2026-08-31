import { AppError } from "../errors/app-error.js";
import { products } from "../models/product.js";
import type { IProduct } from "../types.js";

type ProductData = Omit<IProduct, "id">;

function parseId(id: string): number {
  const parsedId = Number(id);

  if (!Number.isSafeInteger(parsedId) || parsedId <= 0) {
    throw new AppError("ID de produto inválido", 400);
  }

  return parsedId;
}

function validateProduct(data: unknown): ProductData {
  if (typeof data !== "object" || data === null || Array.isArray(data)) {
    throw new AppError("O corpo da requisição deve ser um objeto", 400);
  }

  const { name, price, inStock } = data as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 3) {
    throw new AppError("O nome deve ser um texto com no mínimo 3 caracteres", 400);
  }

  if (typeof price !== "number" || !Number.isFinite(price) || price < 0) {
    throw new AppError("O preço deve ser um número finito maior ou igual a zero", 400);
  }

  if (typeof inStock !== "boolean") {
    throw new AppError("O campo inStock deve ser booleano", 400);
  }

  return { name: name.trim(), price, inStock };
}

function getProducts(): IProduct[] {
  return products;
}

function getProduct(id: string): IProduct {
  const product = products.find((item) => item.id === parseId(id));

  if (!product) {
    throw new AppError("Produto não encontrado", 404);
  }

  return product;
}

function createProduct(data: unknown): IProduct {
  const validProduct = validateProduct(data);
  const id = products.reduce((largestId, product) => Math.max(largestId, product.id), 0) + 1;
  const product = { id, ...validProduct };

  products.push(product);
  return product;
}

function updateProduct(id: string, data: unknown): IProduct {
  const product = getProduct(id);
  const validProduct = validateProduct(data);

  Object.assign(product, validProduct);
  return product;
}

function deleteProduct(id: string): void {
  const productId = parseId(id);
  const index = products.findIndex((item) => item.id === productId);

  if (index === -1) {
    throw new AppError("Produto não encontrado", 404);
  }

  products.splice(index, 1);
}

export default {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
