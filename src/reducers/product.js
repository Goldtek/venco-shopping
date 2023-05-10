import {ADD_ITEM, LOG_OUT, UPDATE_ITEMS} from '../actions/action-types';

const initialState = {
  loading: true,
  items: [],
  total: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let productCost = 0;
      action.payload.map(item => {
        const qty = Number(item.quantity);
        productCost += qty * Number(item.price);
      });
      const total = productCost;
      return {
        ...state,
        items: action.payload,
        total,
      };

    case UPDATE_ITEMS: {
      let _productCost = 0;

      action.items
        .filter(el => el.isChecked !== false)

        .map(item => {
          const qty = Number(item.quantity);
          _productCost += qty * Number(item.price);
        });
      const _total = _productCost;
      return {
        ...state,
        total: _total,
        items: action.items,
      };
    }

    case LOG_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default CartReducer;
