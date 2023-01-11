import Products from '../interfaces/product';
import productsModel from '../models/productModel'; 

async function create(infos: Products) {
  const result = await productsModel.create(infos);
  return result;
}

export default { create };