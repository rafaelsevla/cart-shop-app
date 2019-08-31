import { ActionTypes as types } from './constants';

export const initialState = {
  itens: [],
  isFreeShipping: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { itens: [], isFetchingProducts: true };

    case types.FETCH_PRODUCTS_FAIL:
      return {
        itens: [],
        isFetchingProducts: false,
        showErrorMessage: true
      };

    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        itens: [...action.payload.products],
        isFetchingProducts: false
      };

    default:
      return state;
  }
};
