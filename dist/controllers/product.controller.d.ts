import type { RequestHandler } from "express";
import type { IProduct } from "../types.js";
import type { EmptyBody, EmptyParams, EmptyQuery, IdParams, ProductBody } from "../types/http.types.js";
declare const _default: {
    getProducts: RequestHandler<EmptyParams, IProduct[], EmptyBody, EmptyQuery, Record<string, any>>;
    getProduct: RequestHandler<IdParams, IProduct, EmptyBody, EmptyQuery, Record<string, any>>;
    createProduct: RequestHandler<EmptyParams, IProduct, ProductBody, EmptyQuery, Record<string, any>>;
    updateProduct: RequestHandler<IdParams, IProduct, ProductBody, EmptyQuery, Record<string, any>>;
    deleteProduct: RequestHandler<IdParams, void, EmptyBody, EmptyQuery, Record<string, any>>;
};
export default _default;
//# sourceMappingURL=product.controller.d.ts.map