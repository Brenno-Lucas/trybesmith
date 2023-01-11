import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Request, Response } from 'express';
import usersService from '../services/userService';

const secret = process.env.JWT_SECRET || 'secret';

const create = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  await usersService.create({ username, vocation, level, password });
  const token = jwt.sign({ payload: { username } }, secret, { expiresIn: '1d' });
  res.status(201).json({ token });
};

export default {
  create,
};