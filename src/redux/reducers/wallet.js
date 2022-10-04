// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import {
  GET_API,
  INITIAL_REQUEST,
  INITIAL_REQUEST_ONCLICK,
  GET_API_ONCLICK,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: false,
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INITIAL_REQUEST:
    return {
      ...state,
      loading: true,
    };
  case GET_API:
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  case INITIAL_REQUEST_ONCLICK:
    return {
      ...state,
    };
  case GET_API_ONCLICK:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
