import IProductsConnection, { IProduct, IProductCreate, IProductPatch } from "./interfaces/IProducts.connection";
import APIConnection from ".";
import { AxiosRequestConfig } from "axios";

export default class ProductConnection implements IProductsConnection {
  
  protected _route: string

  constructor() {
    this._route = 'products/'
  }
  
  async getAll(): Promise<IProduct[]> {
    const { data } = await APIConnection.get(this._route);
    return data as IProduct[];
  }

  async search(term: string): Promise<IProduct[]> {
    const route = this._route + term;
    const { data } = await APIConnection.get(route);
    return data as IProduct[];
  }

  async getOne(id: string): Promise<IProduct> {
    const route = this._route + id;
    const { data } = await APIConnection.get(route);
    return data as IProduct;
  }

  async post(product: IProductCreate): Promise<IProduct> {
    const { data } = await APIConnection.get(this._route, product as AxiosRequestConfig);
    return data as IProduct;
  }

  async put(id: string, product: IProductCreate): Promise<IProduct> {
    const route = this._route + id;
    const { data } = await APIConnection.get(route, product as AxiosRequestConfig);
    return data as IProduct;
  }

  async patch(id: string, product: IProductPatch): Promise<IProduct> {
    const route = this._route + id;
    const { data } = await APIConnection.get(route, product as AxiosRequestConfig);
    return data as IProduct;
  }

  async delete(id: string): Promise<void> {
    const route = this._route + id;
    await APIConnection.get(route);
  }

}