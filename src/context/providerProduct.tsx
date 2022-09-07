import React, { useMemo, useState, useEffect } from 'react';
import { IProduct } from '../APIConnection/interfaces/IProducts.connection';
import ProductConnection from '../APIConnection/Products.connection';
import ContextProduct from './ContextProduct';

function Provider({ children }: { children: React.ReactNode }) {
  const [productsArray, setProductsArray] = useState<IProduct[]>([]);
  const [isEditionMode, setIsEditionMode] = useState<boolean>(false);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);

  const updateProductsArray = async (): Promise<void> => {
    const productsConnection = new ProductConnection()
    const newRequestArray = await productsConnection.getAll();
    setProductsArray(newRequestArray);
  };

  const value = useMemo(() => ({
    productsArray,
    setProductsArray,
    isEditionMode,
    setIsEditionMode,
    editProduct,
    setEditProduct,
    updateProductsArray,
  }), [
    productsArray,
    isEditionMode,
    editProduct,
  ]);

  useEffect(() => { updateProductsArray(); }, []);

  return (
    <ContextProduct.Provider value={value}>
      {children}
    </ContextProduct.Provider>
  );
}

export default Provider;
