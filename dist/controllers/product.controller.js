import productService from "../services/product.service.js";
function getProducts(_request, response) {
    response.json(productService.getProducts());
}
function getProduct(request, response, next) {
    try {
        response.json(productService.getProduct(request.params.id));
    }
    catch (error) {
        next(error);
    }
}
function createProduct(request, response, next) {
    try {
        response.status(201).json(productService.createProduct(request.body));
    }
    catch (error) {
        next(error);
    }
}
function updateProduct(request, response, next) {
    try {
        response.json(productService.updateProduct(request.params.id, request.body));
    }
    catch (error) {
        next(error);
    }
}
function deleteProduct(request, response, next) {
    try {
        productService.deleteProduct(request.params.id);
        response.status(204).send();
    }
    catch (error) {
        next(error);
    }
}
export default { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
//# sourceMappingURL=product.controller.js.map