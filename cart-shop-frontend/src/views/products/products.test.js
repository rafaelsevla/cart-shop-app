import { ActionTypes as types } from './constants';
import products, { initialState } from './reducers';
import getPostMock from 'utils/getPostMock';

const cardItemId1 = {
  id: 1,
  amount: 1,
  sku: 18644119330491312,
  title: 'Camisa Puma Palmeiras II',
  description: '14/15 s/nº',
  availableSizes: ['S', 'G', 'GG', 'GGG'],
  style: 'Preta com listras brancas',
  price: 229.9,
  installments: 9,
  currencyId: 'BRL',
  currencyFormat: 'R$',
  isFreeShipping: true
};

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

test('should be return an item to cart with id 1', () => {
  const before = {
    cartItens: [],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.ADD_PRODUCTS_TO_CART,
    payload: 1
  };

  const after = {
    cartItens: [
      {
        id: 1,
        amount: 1,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return an item to cart with id 2', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 1,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.ADD_PRODUCTS_TO_CART,
    payload: 2
  };

  const after = {
    cartItens: [
      cardItemId1,
      {
        id: 2,
        amount: 1,
        sku: 11854078013954528,
        title: 'Camisa Feminina Puma Palmeiras I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G'],
        style: 'Branco com listras brancas',
        price: 199.9,
        installments: 7,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return increase an item of cardItem', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 1,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.INCREASE_PRODUCTS_TO_CART,
    payload: 1
  };

  const after = {
    cartItens: [
      {
        id: 1,
        amount: 2,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be return increase an item of cardItem', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 2,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.INCREASE_PRODUCTS_TO_CART,
    payload: 1
  };

  const after = {
    cartItens: [
      {
        id: 1,
        amount: 3,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be returned with zeroed cart', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 2,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.REMOVE_PRODUCT_FROM_CART,
    payload: 1
  };

  const after = {
    cartItens: [],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be returned with zeroed cart', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 2,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      },
      {
        id: 2,
        amount: 1,
        sku: 11854078013954528,
        title: 'Camisa Feminina Puma Palmeiras I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G'],
        style: 'Branco com listras brancas',
        price: 199.9,
        installments: 7,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.REMOVE_PRODUCT_FROM_CART,
    payload: 1
  };

  const after = {
    cartItens: [
      {
        id: 2,
        amount: 1,
        sku: 11854078013954528,
        title: 'Camisa Feminina Puma Palmeiras I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G'],
        style: 'Branco com listras brancas',
        price: 199.9,
        installments: 7,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be returned with minus one item', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 3,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.DECREASE_PRODUCTS_TO_CART,
    payload: 1
  };

  const after = {
    cartItens: [
      {
        id: 1,
        amount: 2,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});

test('should be returned with minus one item two', () => {
  const before = {
    cartItens: [
      {
        id: 1,
        amount: 2,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  const action = {
    type: types.DECREASE_PRODUCTS_TO_CART,
    payload: 1
  };

  const after = {
    cartItens: [
      {
        id: 1,
        amount: 1,
        sku: 18644119330491312,
        title: 'Camisa Puma Palmeiras II',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Preta com listras brancas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true
      }
    ],
    itens: getPostMock.products,
    isFetchingProducts: false,
    showErrorMessage: false
  };

  expect(products(before, action)).toEqual(after);
});
