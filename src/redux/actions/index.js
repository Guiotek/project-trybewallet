// Coloque aqui suas actions
export const EMAIL_VALIDATED = 'EMAIL_VALIDATED';

export const GET_API = 'GET_API';
export const INITIAL_REQUEST = 'INITIAL_REQUEST';

export const GET_API_ONCLICK = 'GET_API_ONCLICK';
export const INITIAL_REQUEST_ONCLICK = 'INITIAL_REQUEST_ONCLICK';

export const DELETE_ITEM = 'DELETE_ITEM';

export const EmailPayload = (payload) => ({ type: EMAIL_VALIDATED,
  payload });

export const initialRequest = () => ({
  type: INITIAL_REQUEST,
});
export const getRequest = (items) => ({
  type: GET_API,
  payload: items,
});

export const initialRequestOnClick = () => ({
  type: INITIAL_REQUEST_ONCLICK,
});
export const getRequestOnClick = (item) => ({
  type: GET_API_ONCLICK,
  payload: item,
});

export const deleteItems = (item) => ({
  type: DELETE_ITEM,
  payload: item,
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

export const RequestApiOnClick = (obj) => async (dispatch) => {
  dispatch(initialRequestOnClick());
  const api = 'https://economia.awesomeapi.com.br/json/all';
  const data = await fetch(api);
  const results = await data.json();
  obj.exchangeRates = results;
  dispatch(getRequestOnClick(obj));
};
