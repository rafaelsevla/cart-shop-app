import { ActionTypes as types } from './constants';
import CONSTANTS from 'utils/endpoints';
import axios from 'axios';

export const addProductToCart = product_id => (dispatch, getState) => {
  if (getState().products.cartItens.find(item => item.id === product_id)) {
    dispatch({
      type: types.INCREASE_PRODUCTS_TO_CART,
      payload: product_id
    });
  } else {
    dispatch({
      type: types.ADD_PRODUCTS_TO_CART,
      payload: product_id
    });
  }
};

export const decreaseProductFromCart = product_id => ({
  type: types.DECREASE_PRODUCTS_TO_CART,
  payload: product_id
});

const fetchProductsFail = () => ({
  type: types.FETCH_PRODUCTS_FAIL
});

const fetchProductsSuccess = data => dispatch => {
  localStorage.setItem('fetchProducts', true);
  dispatch({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: data
  });
};

export const fetchProducts = () => dispatch => {
  dispatch({
    type: types.FETCH_PRODUCTS
  });

  axios
    .get(`${CONSTANTS.API}${CONSTANTS.PRODUCTS}`)
    .then(response => {
      dispatch(fetchProductsSuccess(response.data));
    })
    .catch(() => {
      dispatch(fetchProductsFail());
    });
};

export const removeProductToCart = product_id => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  payload: product_id
});
