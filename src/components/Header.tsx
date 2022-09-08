import { useContext, useState } from "react";
import ProductConnection from "../APIConnection/Products.connection";
import ProductContext from "../context/ProductContext";
import searchIcon from "../icon/search_icon.png";
import plusIcon from "../icon/plus_icon.png";
import {
  plusIconStyle,
  h1Styles,
  searchIconStyles,
  headerStyle,
  searchInputStyle,
  addDivStyle,
  addSpanStyle,
  addButtonStyle,
} from "../styles/headerStyle";

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
    <header style={headerStyle}>
      <div>
        <h1 style={ h1Styles }>Loja do Lisboa</h1>
      </div>
      <div>
        <input 
          style={searchInputStyle}
          value={ searchInput }
          placeholder="buscar"
          onChange={ ({ target: { value } }) => setSearchInput(value) }
        />
        <button type="button" onClick={ searchClickButton }>
          <img 
            alt="Icone de busca"
            src={ searchIcon }
            style={ searchIconStyles }
          />
        </button>
      </div>
      <div style={ addDivStyle }>
        <span style={ addSpanStyle }>
          Adicionar produto
        <button
         type="button"
         onClick={ createClickButton }
         style={addButtonStyle} 
        >
          <img 
            alt="Icone para adicionar novo produto"
            src={ plusIcon }
            style={ plusIconStyle }
          />
        </button>
        </span>
      </div>
    </header>
  )
}

export default Header;
