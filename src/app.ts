import express from 'express';
import orderController from './controllers/orderController';
import productController from './controllers/productController';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/products', productController.create);
app.get('/products', productController.getAll);
app.post('/users', userController.create);
app.get('/orders', orderController.getAll);

export default app;
