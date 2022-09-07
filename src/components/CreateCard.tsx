import React, { useContext, useEffect, useState } from "react";
import { IProductCreate } from "../APIConnection/interfaces/IProducts.connection";
import ProductConnection from "../APIConnection/Products.connection";
import ProductContext from "../context/ProductContext";


function CreateCard() {
  const {
    isEditMode,
    editProduct,
    setIsEditMode,
    setIsCreateMode,
    setEditProduct,
    updateProductsArray,
  } = useContext(ProductContext);

  const productConnection = new ProductConnection();

  const [productInput, setProductInput] = useState<string>('');
  const [valueInput, setValueInput] = useState<string>('0.00');
  const [descriptionInput, setDescriptionInput] = useState<string>('');
  
  const onValueInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const removeNonNumericCharacters = String(value).replace(/\W|\D/gm, '');
    let refactoringValue = removeNonNumericCharacters.replace(/^0+/, '');

    while(refactoringValue.length < 3) refactoringValue = '0' + refactoringValue;

    const finishValue = refactoringValue.split('');
    finishValue.splice(finishValue.length - 2, 0, '.');

    setValueInput(finishValue.join(''));
  };

  useEffect(() => {
    const updateState = () => {
      if (isEditMode) {
        setDescriptionInput(String(editProduct?.description));
        setValueInput(String(editProduct?.value));
        setProductInput(String(editProduct?.product));
      }
    };
    updateState();
  }, []);


  const newProductCreate = () => ({ product: productInput, value: valueInput, description: descriptionInput }) as IProductCreate

  const onCancelButtonClick = () => {
    setIsEditMode(false);
    setIsCreateMode(false);
    setEditProduct(null);
  };

  const onSaveButtonClick = () => {
    productConnection.post(newProductCreate());
    updateProductsArray();
    onCancelButtonClick();
  }

  const onUpdateButtonClick = () => {
    productConnection.put(String(editProduct?._id), newProductCreate());
    updateProductsArray();
    onCancelButtonClick();
  }
  
  return (
    <form>
    
      <label htmlFor="product-input">
        Produto
        <input
         id="product-input"
         type="text"
         value={ productInput }
         onChange={({ target: { value } }) => setProductInput(value)}
        />
      </label>
    
      <label htmlFor="value-input">
        Valor
        <input
          id="value-input"
          type="text"
          value={ valueInput.replace('.', ',') }
          onChange={ onValueInputChange }
        />
      </label>
      
      <label htmlFor="description-textarea">
        Descrição
        <textarea
          id="description-textarea"
          value={ descriptionInput }
          onChange={({ target: { value } }) => setDescriptionInput(value)}
        />
      </label>
    
      <div>

        <button 
          type="button"
          onClick={ onCancelButtonClick }
        >
          Cancelar
        </button>

        <button 
          type="button"
          onClick={ isEditMode ? onUpdateButtonClick : onSaveButtonClick }
        >
        { isEditMode ? 'Atualizar' : 'Cadastrar' }
        </button>
      </div>

    </form>
  )
}

export default CreateCard;
