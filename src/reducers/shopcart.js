const initialState = {
  products: [],
  total_cost: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      if (state.products.length === 0) {
        state.products.splice(0, 0, {
          ...action.payload,
          choosen_index: 0,
          quantity: 1,
          product_cost: action.payload.price * 1,
        });
        return state;
      } else {
        let obj = state.products.find(obj => {
          return obj.id === action.payload.id;
        });
        if (obj === undefined) {
          state.products.splice(state.products.length, 0, {
            ...action.payload,
            choosen_index: state.products.length,
            quantity: 1,
            product_cost: action.payload.price * 1,
          });
          return state;
        } else {
          state.products.splice(obj.choosen_index, 1, {
            ...action.payload,
            choosen_index: obj.choosen_index,
            quantity: obj.quantity + 1,
            product_cost: action.payload.price * (obj.quantity + 1),
          });
          return state;
        }
      }
    case 'TOTAL_COST':
      return {
        ...state,
        total_cost: state.products
          .map(product => product.product_cost)
          .reduce((accumulator, product) => accumulator + product),
      };
    case 'INCREASE_QUANTITY':
      let obj = state.products.find(obj => {
        return obj.id === action.payload.id;
      });

      state.products.splice(obj.choosen_index, 1, {
        ...action.payload,
        quantity: obj.quantity + 1,
        product_cost: action.payload.price * (obj.quantity + 1),
      });
      return state;
    case 'DECREASE_QUANTITY':
      let objDec = state.products.find(objDec => {
        return objDec.id === action.payload.id;
      });
      state.products.splice(objDec.choosen_index, 1, {
        ...action.payload,
        quantity: objDec.quantity - 1,
        product_cost: action.payload.price * (objDec.quantity - 1),
      });
      return state;
    default:
      return state;
  }
};
