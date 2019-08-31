import { ActionTypes as types } from './constants';
import CONSTANTS from 'utils/endpoints';
import axios from 'axios';

export const addProductToCart = product_id => ({
  type: types.ADD_PRODUCTS_TO_CART,
  payload: product_id
});

const fetchProductsFail = () => ({
  type: types.FETCH_PRODUCTS_FAIL
});

const fetchProductsSuccess = data => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: data
});

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
