import express from 'express';
import type { Request, Response, NextFunction } from "express";
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(userRoutes);
 
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})
 
export default app;