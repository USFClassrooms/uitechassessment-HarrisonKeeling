import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from 'ducks/cart';

export default combineReducers({
  cart: cart.reducer,
});

export function* sagas() {
  yield all([
    cart.sagas(),
  ]);
}
