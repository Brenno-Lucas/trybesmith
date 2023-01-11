import { ResultSetHeader } from 'mysql2';
import Products from '../interfaces/product';
import connection from './connection';

async function create(product: Products): Promise<Products> {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    Object.values(product),
  );
  const { insertId } = result;
  return { id: insertId, ...product }; 
}

export default {
  create,
};