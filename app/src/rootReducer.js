import { combineReducers } from 'redux';
import cart from 'ducks/cart';
import ui from 'ducks/ui';

export default combineReducers({
  cart: cart.reducer,
  ui,
});
