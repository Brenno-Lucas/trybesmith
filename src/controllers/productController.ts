import { Request, Response } from 'express';
import productService from '../services/productService';
import 'express-async-errors';

async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await productService.create({ name, amount });
  return res.status(201).json(result);
}

const getAll = async (_req: Request, res: Response) => {
  const result = await productService.getAll();
  return res.status(200).json(result);
};

export default {
  create,
  getAll,
};