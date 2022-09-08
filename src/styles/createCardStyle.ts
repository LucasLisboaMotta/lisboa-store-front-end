import CSS from 'csstype';

const divBackGround: CSS.Properties = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  backgroundColor: 'black',
  opacity: '0.75',
};

const formStyle: CSS.Properties = {
  backgroundColor: 'rgb(175, 175, 175)',
  position: 'absolute',
  top: '150px',
  marginLeft: '-150px',
  display: 'inline',
  textAlign: 'center',
  width: '300px',
  height: '205px',
  borderRadius: '10px',
  border: '3px solid rgb(75, 75, 75)',
  paddingTop: '15px',
  color: 'black',
};

const divFormsStyles: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
};
const textareaStyles: CSS.Properties = {
  resize: 'none',
  borderRadius: '7px',
  marginTop: '5px',
  border: '2px solid black',
  width: '250px',
  height: '60px',
}

const labelStyle: CSS.Properties = {
  textAlign: 'right',
  marginRight: '30px',
  margin: '5px',
}

const inputStyle: CSS.Properties = {
  borderRadius: '5px',
  fontSize: '18px',
}

const labelTextareaStyle: CSS.Properties = {
  marginTop: '5px',
};

const buttonStyle: CSS.Properties = {
  width: '90px',
  height: '30px',
  borderRadius: '5px',
  backgroundColor: '#238E68',
  color: 'white',
  margin: '2px',
  border: '2px solid black',
  fontSize: '20px',
};

const buttonDisabledStyle: CSS.Properties = {
  ...buttonStyle,
  backgroundColor: '#003300',
};

export {
  buttonDisabledStyle,
  buttonStyle,
  labelTextareaStyle,
  inputStyle,
  labelStyle,
  divBackGround,
  formStyle,
  divFormsStyles,
  textareaStyles,
};