// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_API, INITIAL_REQUEST } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
