import ordersModels from '../models/orderModel';

const getAll = async () => {
  const result = await ordersModels.getAll();
  return result;
};

export default {
  getAll,
};