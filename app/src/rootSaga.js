import { all } from 'redux-saga/effects';
import cart from 'ducks/cart';

export default function* rootSaga() {
  yield all([
    cart.sagas(),
  ]);
}
