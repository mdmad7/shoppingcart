import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shopcart from './shopcart';

export default combineReducers({
  router: routerReducer,
  shopcart,
});
