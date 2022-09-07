import React, { useMemo, useState, useEffect } from 'react';
import { IProduct } from '../APIConnection/interfaces/IProducts.connection';
import ProductConnection from '../APIConnection/Products.connection';
import ProductContext from './ProductContext';

function ProductProvider({ children }: { children: React.ReactNode }) {
  const [productsArray, setProductsArray] = useState<IProduct[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [productDetail, setProductDetail] = useState<IProduct | null>(null);
  const [isCreateMode, setIsCreateMode] = useState<boolean>(false);

  const updateProductsArray = async (): Promise<void> => {
    const productsConnection = new ProductConnection()
    const newRequestArray = await productsConnection.getAll();
    setProductsArray(newRequestArray);
  };

  const value = useMemo(() => ({
    productsArray,
    isEditMode,
    editProduct,
    updateProductsArray,
    productDetail,
    setEditProduct,
    setProductsArray,
    setIsEditMode,
    setProductDetail,
    isCreateMode,
    setIsCreateMode,
  }), [
    productsArray,
    isEditMode,
    editProduct,
    productDetail,
    isCreateMode,
  ]);

  useEffect(() => { updateProductsArray(); }, []);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
