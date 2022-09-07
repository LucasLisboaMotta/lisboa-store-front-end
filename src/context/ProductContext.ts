import { createContext } from 'react';
import { IProduct } from '../APIConnection/interfaces/IProducts.connection'

interface IProductContext {
  productsArray: IProduct[]
  isEditionMode: boolean
  editProduct: IProduct | null
  updateProductsArray(): Promise<void>
}

const ProductContext = createContext<IProductContext | null>(null);

export default ProductContext;
