import type { IProduct } from "../types.js";
declare function getProducts(): IProduct[];
declare function getProduct(id: string): IProduct;
declare function createProduct(data: unknown): IProduct;
declare function updateProduct(id: string, data: unknown): IProduct;
declare function deleteProduct(id: string): void;
declare const _default: {
    getProducts: typeof getProducts;
    getProduct: typeof getProduct;
    createProduct: typeof createProduct;
    updateProduct: typeof updateProduct;
    deleteProduct: typeof deleteProduct;
};
export default _default;
//# sourceMappingURL=product.service.d.ts.map