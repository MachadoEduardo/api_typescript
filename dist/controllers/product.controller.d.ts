import type { NextFunction, Request, Response } from "express";
import type { IProduct } from "../types.js";
interface ProductParams {
    id: string;
}
declare function getProducts(_request: Request, response: Response<IProduct[]>): void;
declare function getProduct(request: Request<ProductParams>, response: Response<IProduct>, next: NextFunction): void;
declare function createProduct(request: Request<Record<string, never>, IProduct, unknown>, response: Response<IProduct>, next: NextFunction): void;
declare function updateProduct(request: Request<ProductParams, IProduct, unknown>, response: Response<IProduct>, next: NextFunction): void;
declare function deleteProduct(request: Request<ProductParams>, response: Response, next: NextFunction): void;
declare const _default: {
    getProducts: typeof getProducts;
    getProduct: typeof getProduct;
    createProduct: typeof createProduct;
    updateProduct: typeof updateProduct;
    deleteProduct: typeof deleteProduct;
};
export default _default;
//# sourceMappingURL=product.controller.d.ts.map