import { ActionTypes as types } from './constants';
import products, { initialState } from './reducers';
import getPostMock from 'utils/getPostMock';

test('should be return a isFetchingProducts true', () => {
  const before = initialState;

  const action = {
    type: types.FETCH_PRODUCTS
  };

  const after = {
    cartItens: [],
    isFetchingProducts: true,
    itens: [],
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return a object and isFetchingProducts is false', () => {
  const before = {
    cartItens: [],
    isFetchingProducts: true,
    itens: []
  };

  const action = {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: getPostMock
  };

  const after = {
    cartItens: [],
    itens: getPostMock.products,
    isFetchingProducts: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return showErrorMessage', () => {
  const before = initialState;

  const action = {
    type: types.FETCH_PRODUCTS_FAIL
  };

  const after = {
    cartItens: [],
    itens: [],
    isFetchingProducts: false,
    showErrorMessage: true
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return showErrorMessage', () => {
  const before = {
    cartItens: [],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.ADD_PRODUCTS_TO_CART
  };

  const after = {
    cartItens: [],
    itens: [],
    isFetchingProducts: false,
    showErrorMessage: true
  };

  expect(products(before, action)).toEqual(after);
});
