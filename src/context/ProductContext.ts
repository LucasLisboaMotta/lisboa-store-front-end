import { createContext } from 'react';
import { IProduct } from '../APIConnection/interfaces/IProducts.connection'

interface IProductContext {
  productsArray: IProduct[]
  productDetail: IProduct | null
  isEditMode: boolean
  editProduct: IProduct | null
  isCreateMode: boolean
  setIsCreateMode(bool: boolean): void
  updateProductsArray(): Promise<void>
  setEditProduct(product: IProduct | null): void
  setProductsArray(products: IProduct[]): void
  setIsEditMode(bool: boolean): void
  setProductDetail(product: IProduct | null): void
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

export default ProductContext;
