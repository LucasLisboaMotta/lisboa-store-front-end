import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import ProductCard from './ProductCard';

function ListProductCard() {
  const { productsArray } = useContext(ProductContext);

  return (
    <div>
      {productsArray.map((product) => (
        <ProductCard key={ product._id} product={ product } />
      ))}
    </div>
  )
}

export default ListProductCard;
