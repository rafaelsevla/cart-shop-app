import { ActionTypes as types } from './constants';

export const initialState = {
  products: [],
  isFreeShipping: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return { products: [], isFetchingProducts: true };

    case types.FETCH_PRODUCTS_FAIL:
      return {
        products: [],
        isFetchingProducts: false,
        showErrorMessage: true
      };

    case types.FETCH_PRODUCTS_SUCCESS:
      return {
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

    default:
      return state;
  }
};
