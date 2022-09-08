import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import ProductCard from './ProductCard';
import { productListStyle } from '../styles/productsCardStyle';

function ListProductCard() {
  const { productsArray } = useContext(ProductContext);

  return (
    <div style={ productListStyle }>
      {productsArray.map((product) => (
        <ProductCard key={ product._id} product={ product } />
      ))}
    </div>
  )
}

export default ListProductCard;
