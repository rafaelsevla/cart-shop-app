import { ActionTypes as types } from './constants';

export const initialState = {
  cartItens: [],
  itens: [],
  isFreeShipping: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS_TO_CART:
      const newCartItem = state.itens.find(
        product => product.id === action.payload
      );
      return { ...state, cartItens: [...state.cartItens, newCartItem] };

    case types.FETCH_PRODUCTS:
      return { ...state, itens: [], isFetchingProducts: true };

    case types.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        itens: [],
        isFetchingProducts: false,
        showErrorMessage: true
      };

    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        itens: [...action.payload.products],
        isFetchingProducts: false
      };

    default:
      return state;
  }
};
