import CreateCard from "./components/CreateCard";
import Header from "./components/Header";
import ListProductCard from "./components/ListProductCard";
import ProductCardDetail from "./components/ProductCardDetail";
import ProductContext from "./context/ProductContext";
import { useContext } from "react";
import { flexDivStyles } from "./styles/productsCardStyle";

function App() {
  const { isEditMode, isCreateMode } = useContext(ProductContext);
  const startCreateCard = isEditMode || isCreateMode;

  return (
      <div className="App">
        {startCreateCard && <CreateCard />}
        <Header />
        <div style={ flexDivStyles }>
          <ListProductCard />
          <ProductCardDetail />
        </div>
      </div>
  );
}

export default App;
