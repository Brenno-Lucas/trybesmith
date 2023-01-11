import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/user';
import connection from './connection';

const create = async (user: User): Promise<User> => {
  const [result] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`, Object.values(user));
  const { insertId } = result;
  return { id: insertId, ...user };
};

export default {
  create,
};