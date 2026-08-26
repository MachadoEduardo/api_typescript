
import express from 'express';
import userController from '../controllers/user.controller.js';
import { Logger } from '../middlewares/logger.middleware.js';

const router = express.Router();
router.use(Logger);

router.get('/:id', userController.getCustomer);
router.get('/', userController.getCustomers);
router.post('/', userController.createCustomer);
router.patch('/:id', userController.updateCustomer);
router.delete('/:id', userController.deleteCustomer);

export default router;
