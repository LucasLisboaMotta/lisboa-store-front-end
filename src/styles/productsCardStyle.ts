import CSS from 'csstype';

const flexDivStyles: CSS.Properties = {
  marginTop: '25px',
  display: 'flex',
  justifyContent: 'space-around',
};

const productDetailStyle: CSS.Properties = {
  width: '40%',
  height: '600px',
  borderRadius: '5px',
  backgroundColor: '#32CD99',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
};

const productDivStyle: CSS.Properties = {
  width: '95%',
  height: '60px',
  borderRadius: '5px',
  marginBottom: '15px',
  backgroundColor: '#32CD99',
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
  border: '2px solid black',
};

const productListStyle: CSS.Properties = {
  width: '40%',
  height: '600px',
  overflowY: 'auto',
};

const buttonCardStyle: CSS.Properties = {
  fontSize: '18px',
  borderRadius: '0 0 5px 5px',
  backgroundColor: '#C0C0C0',
  borderTop: '3px solid black',
};

const h2Style: CSS.Properties = {
  fontSize: '40px',
  marginTop: '5px',
};

const divButtonStyle: CSS.Properties = {
  alignItems: 'flex-end',
};

const pStyle: CSS.Properties = {
  height: '78%',
  fontSize: '20px',
  marginTop: '15px',
};

export {
  pStyle,
  divButtonStyle,
  h2Style,
  flexDivStyles,
  productDetailStyle,
  productDivStyle,
  productListStyle,
  buttonCardStyle,
};