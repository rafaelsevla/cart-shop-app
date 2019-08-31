import { ActionTypes as types } from './constants';
import products, { initialState } from './reducers';

test('should be return a isFetchingProducts true', () => {
  const before = initialState;
  const action = {
    type: types.FETCH_PRODUCTS
  };
  const after = {
    products: [],
    isFetchingProducts: true
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return a object and isFetchingProducts is false', () => {
  const before = initialState;
  const action = {
    type: types.FETCH_PRODUCTS_SUCCESS
  };
  const after = {
    products: [
      {
        id: 0,
        sku: 8552515751438644,
        title: 'Camisa Puma Palmeiras I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Branco com listras verdes',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
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
    products: [],
    isFetchingProducts: false,
    showErrorMessage: true
  };

  expect(products(before, action)).toEqual(after);
});
