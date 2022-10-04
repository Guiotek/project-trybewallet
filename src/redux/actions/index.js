// Coloque aqui suas actions
export const EMAIL_VALIDATED = 'EMAIL_VALIDATED';
export const GET_API = 'GET_API';
export const INITIAL_REQUEST = 'INITIAL_REQUEST';

export const EmailPayload = (payload) => ({ type: EMAIL_VALIDATED,
  payload });

export const initialRequest = () => ({
  type: INITIAL_REQUEST,
});

export const getRequest = (items) => ({
  type: GET_API,
  payload: items,
});

export const RequestApi = () => async (dispatch) => {
  dispatch(initialRequest());
  const api = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(api);
  const results = await data.json();
  console.log(results);
  const array = Object.keys(results);
  console.log(array);
  array.splice(1, 1);
  dispatch(getRequest(array));
};
