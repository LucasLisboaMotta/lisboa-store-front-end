import { IProduct } from '../APIConnection/interfaces/IProducts.connection';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { productDivStyle, buttonCardStyle } from '../styles/productsCardStyle';

function ProductCard({ product }: { product: IProduct }) {
  const { setProductDetail } = useContext(ProductContext);
  
  const onClickDetail = () => {
    setProductDetail(product);
  }

  return (
    <div style={ productDivStyle }>
      <h2>
        { product.product }
      </h2>
      <span>
        R$:
        {' '}
        { product.value.replace('.', ',') }
      </span>
      <button type="button" onClick={ onClickDetail } style={ buttonCardStyle } >
        Detalhes
      </button>
    </div>
  )
}

export default ProductCard;

