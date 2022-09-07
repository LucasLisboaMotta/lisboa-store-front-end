import { useContext } from 'react';
import { IProduct } from '../APIConnection/interfaces/IProducts.connection';
import ProductConnection from '../APIConnection/Products.connection';
import ProductContext from '../context/ProductContext';

function ProductCardDetail() {
  const productConnection = new ProductConnection();
 
  const {
    productDetail,
    updateProductsArray,
    setEditProduct,
    setIsEditMode,
    setProductDetail,
  } = useContext(ProductContext);

  const onClickEdit = () => {
    setEditProduct(productDetail as IProduct);
    setIsEditMode(true);
  }

  const onClickExclude = async () => {
    await productConnection.delete(productDetail?._id as string);
    setProductDetail(null);
    updateProductsArray();
  };

  return (
    <section>
      {productDetail !== null && 
        <>
          <h2>
            { productDetail.product }
          </h2>
          <span>
            R$:
            {' '}
            { productDetail.value.replace('.', ',') }
          </span>

          <p>
            { productDetail.description }
          </p> 

          <button type="button" onClick={ onClickEdit } >
            Editar
          </button>
          <button type="button" onClick={ onClickExclude } >
            Excluir
          </button>
        </>
      }
    </section>
  )
}

export default ProductCardDetail;
