import { Router } from "express";
import productController from "../controllers/product.controller.js";

const productRoutes = Router();

productRoutes.get("/", productController.getProducts);
productRoutes.get("/:id", productController.getProduct);
productRoutes.post("/", productController.createProduct);
productRoutes.put("/:id", productController.updateProduct);
productRoutes.delete("/:id", productController.deleteProduct);

export default productRoutes;
