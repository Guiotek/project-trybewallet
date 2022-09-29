// Esse reducer será responsável por tratar as informações da pessoa usuária

const InitialState = {
  email: '',
  password: '',
  buttonDisabled: true,
};

const user = (state = InitialState, action) => {
  console.log(action);
  return state;
};

export default user;
