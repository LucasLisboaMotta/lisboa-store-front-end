import { IProduct } from '../APIConnection/interfaces/IProducts.connection';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

function ProductCard({ product }: { product: IProduct }) {
  const { setProductDetail } = useContext(ProductContext);
  
  const onClickDetail = () => {
    setProductDetail(product);
  }

  return (
    <div>
      <h2>
        { product.product }
      </h2>
      <span>
        R$:
        {' '}
        { product.value.replace('.', ',') }
      </span>
      <button type="button" onClick={ onClickDetail } >
        Detalhes
      </button>
    </div>
  )
}

export default ProductCard;

