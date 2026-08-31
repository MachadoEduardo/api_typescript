import express from 'express';
import { errorHandler } from './middlewares/error-handler.middleware.js';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use(userRoutes);

app.use(errorHandler);
 
export default app;
