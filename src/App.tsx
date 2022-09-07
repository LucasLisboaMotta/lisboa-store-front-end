import CreateCard from "./components/CreateCard";
import Header from "./components/Header";
import ListProductCard from "./components/ListProductCard";
import ProductCardDetail from "./components/ProductCardDetail";
import ProductContext from "./context/ProductContext";
import { useContext } from "react";

function App() {
  const { isEditMode, isCreateMode } = useContext(ProductContext);
  const startCreateCard = isEditMode || isCreateMode;

  return (
      <div className="App">
        <Header />
        {startCreateCard && <CreateCard />}
        <ListProductCard />
        <ProductCardDetail />
      </div>
  );
}

export default App;
