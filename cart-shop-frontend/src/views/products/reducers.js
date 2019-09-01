import { ActionTypes as types } from './constants';

export const initialState = {
  cartItens: [],
  itens: [],
  showErrorMessage: false,
  isFetchingProducts: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCTS_TO_CART:
      let newCartItem = state.itens.find(
        product => product.id === action.payload
      );
      newCartItem.amount = 1;

      return { ...state, cartItens: [...state.cartItens, newCartItem] };

    case types.DECREASE_PRODUCTS_TO_CART:
      let cartItensToDecrease = [...state.cartItens];
      let cartItemToDecrease = cartItensToDecrease.find(
        item => item.id === action.payload
      );
      cartItemToDecrease.amount--;

      return { ...state, cartItens: cartItensToDecrease };

    case types.INCREASE_PRODUCTS_TO_CART:
      let cartItensToIncrease = [...state.cartItens];
      let cartItemToIncrease = cartItensToIncrease.find(
        item => item.id === action.payload
      );
      cartItemToIncrease.amount++;

      return { ...state, cartItens: cartItensToIncrease };

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
        itens: action.payload.products,
        isFetchingProducts: false
      };

    case types.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItens: state.cartItens.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};
