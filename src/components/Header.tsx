import { useContext, useState } from "react";
import ProductConnection from "../APIConnection/Products.connection";
import ProductContext from "../context/ProductContext";

function Header() {
  const productConnection = new ProductConnection();
  const [searchInput, setSearchInput] = useState<string>('');

  const { setProductsArray, setIsCreateMode } = useContext(ProductContext);
  
  const searchClickButton = async () => {
    const newSearchProductArray = await productConnection.search(searchInput);
    setProductsArray(newSearchProductArray);
  };

  const createClickButton = () => {
    setIsCreateMode(true);
  }
  
  return (
    <header>
      <div>
        <h2>
          Procurar
        </h2>
        <input 
          value={ searchInput }
          onChange={ ({ target: { value } }) => setSearchInput(value) }
        />
        <button type="button" onClick={ searchClickButton }>
          icone de buscar
        </button>
      </div>
      <div>
        <button type="button" onClick={ createClickButton } >
          +
        </button>
      </div>
    </header>
  )
}

export default Header;
