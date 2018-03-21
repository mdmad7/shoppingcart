export const addToCart = product => {
  return dispatch => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
    dispatch({ type: 'TOTAL_COST' });
  };
};

export const increase_quantity = product => {
  return dispatch => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product });
    dispatch({ type: 'TOTAL_COST' });
  };
};

export const decrease_quantity = product => {
  return dispatch => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: product });
    dispatch({ type: 'TOTAL_COST' });
  };
};
