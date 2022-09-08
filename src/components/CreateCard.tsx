import React, { useContext, useEffect, useState } from "react";
import { IProductCreate } from "../APIConnection/interfaces/IProducts.connection";
import ProductConnection from "../APIConnection/Products.connection";
import ProductContext from "../context/ProductContext";
import { 
  buttonDisabledStyle,
  buttonStyle,
  labelTextareaStyle,
  inputStyle,
  labelStyle,
  divBackGround,
  formStyle,
  divFormsStyles,
  textareaStyles,
} from "../styles/createCardStyle";


function CreateCard() {
  const {
    isEditMode,
    editProduct,
    setProductDetail,
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

  const onSaveButtonClick = async () => {
    const newProduct = await productConnection.post(newProductCreate());
    setProductDetail(newProduct);
    updateProductsArray();
    onCancelButtonClick();
  }

  const onUpdateButtonClick = async () => {
    const updateProduct = await productConnection.put(String(editProduct?._id), newProductCreate());
    setProductDetail(updateProduct);
    updateProductsArray();
    onCancelButtonClick();
  }

  const isDisabled = () => {
    const verifyProduct = productInput.length < 3;
    const verifyDescription = descriptionInput.length < 3;
    const verifyValue = valueInput === '0.00';
    return [verifyProduct, verifyDescription, verifyValue].some((bool) => bool);
  }

  return (
    <>
      <div style={divBackGround} />

      <form style={ formStyle }>
        <div style={ divFormsStyles }>
          <label htmlFor="product-input" style={ labelStyle }>
            Produto:
            {' '}
            <input
              id="product-input"
              type="text"
              value={ productInput }
              style={ inputStyle }
              onChange={({ target: { value } }) => setProductInput(value)}
            />
          </label>
      
        <label htmlFor="value-input" style={ labelStyle }>
            Valor:
            {' '}
            <input
              id="value-input"
              type="text"
              style={ inputStyle }
              value={ valueInput.replace('.', ',') }
              onChange={ onValueInputChange }
            />
          </label>
  
          <label htmlFor="description-textarea" style={ labelTextareaStyle }>
            Descrição 
            <textarea
              id="description-textarea"
              value={ descriptionInput }
              style={ textareaStyles }
              onChange={({ target: { value } }) => setDescriptionInput(value)}
              />
          </label>
        </div>

        <div>
          <button 
            style={ buttonStyle }
            type="button"
            onClick={ onCancelButtonClick }
            >
            Cancelar
          </button>

          <button 
            type="button"
            style={ isDisabled() ? buttonDisabledStyle : buttonStyle }
            onClick={ isEditMode ? onUpdateButtonClick : onSaveButtonClick }
            disabled={ isDisabled() }
            >
          { isEditMode ? 'Atualizar' : 'Cadastrar' }
          </button>
        </div>
      </form>
   </>
  )
}

export default CreateCard;
