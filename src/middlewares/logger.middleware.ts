import type { Request, Response, NextFunction } from 'express';

export function Logger (req: Request, res: Response, next: NextFunction): void {
  console.log(`Data: ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url}`);
  next();
};
