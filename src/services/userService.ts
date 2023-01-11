import User from '../interfaces/user';
import usersModels from '../models/userModel';

const create = async (user: User) => {
  const result = await usersModels.create(user);
  return result;
};

export default {
  create,
};