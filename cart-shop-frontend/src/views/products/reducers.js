import { ActionTypes as types } from './constants';

export const initialState = {
  cartItens: [],
  itens: [],
  isFreeShipping: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS_TO_CART:
      const id = action.payload;
      let cartItens = [...state.cartItens];
      let cartItem = cartItens.find(item => item.id === id);

      if (cartItem) {
        cartItem.amount++;
      } else {
        let newCartItem = state.itens.find(product => product.id === id);
        newCartItem.amount = 1;
        cartItens = [...state.cartItens, newCartItem];
      }
      return { ...state, cartItens };

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
