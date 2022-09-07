export type IProductCreate = {
  product: string,
  value: string,
  description: string,
}

export type IProductPatch = {
  product?: string,
  value?: string,
  description?: string,
}

export type IProduct = {
  product: string,
  value: string,
  description: string,
  _id: string,
  updated: Date,
  created: Date,
} 

export default interface IProductsConnection {
  getAll(): Promise<IProduct[]>
  search(term: string): Promise<IProduct[]>
  getOne(id: string): Promise<IProduct>
  post(product: IProductCreate): Promise<IProduct>
  put(id: string, product: IProductCreate): Promise<IProduct>
  patch(id: string, product: IProductPatch): Promise<IProduct>
  delete(id: string): Promise<void>
}
