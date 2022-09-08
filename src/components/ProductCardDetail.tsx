import { useContext } from 'react';
import { IProduct } from '../APIConnection/interfaces/IProducts.connection';
import ProductConnection from '../APIConnection/Products.connection';
import ProductContext from '../context/ProductContext';
import { buttonStyle } from "../styles/createCardStyle";
import {
  pStyle,
  divButtonStyle,
  productDetailStyle,
  h2Style,
} from '../styles/productsCardStyle';

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
    <section style={ productDetailStyle }>
      {productDetail !== null && 
        <>
        <div>
          <h2 style={ h2Style }>
            { productDetail.product }
          </h2>
          <span>
            R$:
            {' '}
            { productDetail.value.replace('.', ',') }
          </span>
        </div>

          <p style={ pStyle }>
            { productDetail.description }
          </p> 


          <div style={ divButtonStyle }>
            <button type="button" onClick={ onClickEdit } style={ buttonStyle } >
              Editar
            </button>
            <button type="button" onClick={ onClickExclude } style={ buttonStyle } >
              Excluir
            </button>
          </div>
        </>
      }
    </section>
  )
}

export default ProductCardDetail;
