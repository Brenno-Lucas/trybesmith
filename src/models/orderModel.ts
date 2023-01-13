import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Order from '../interfaces/order';

const getAll = async (): Promise<Order[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT o.id, o.user_id as 'userId', JSON_ARRAYAGG(p.id) as 'productsIds'
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p
    ON o.id = p.order_id GROUP BY o.id;`);
  return result as Order[];
};

export default {
  getAll,
};