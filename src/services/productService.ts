import Products from '../interfaces/product';
import productsModel from '../models/productModel'; 

async function create(infos: Products) {
  const result = await productsModel.create(infos);
  return result;
}

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

export default {
  create,
  getAll,
};