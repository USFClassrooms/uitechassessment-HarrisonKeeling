import { get, post } from 'axios';
import { setSuccess } from 'ducks/ui/success';
import { setError } from 'ducks/ui/error';
import { fromJS } from 'immutable';
import { all, put, takeEvery } from 'redux-saga/effects';

const CART_API = 'http://localhost:5555';

// Actions
const ADD = 'app/entities/cart/ADD';
const REQUEST = 'app/entities/cart/REQUEST';
const RECEIVE = 'app/entities/cart/RECEIVE';

// Action Creators
export function addItem(item) {
  return {
    type: ADD,
    payload: item,
  };
}

export function fetchCart() {
  return {
    type: REQUEST,
  };
}

export function receiveCart(items) {
  return {
    type: RECEIVE,
    payload: items,
  };
}

// Reducer
function reducer(
  state = fromJS({ items: [] }),
  action = {},
) {
  const { payload, type } = action;
  switch (type) {
    case RECEIVE: {
      return state.merge(fromJS(payload));
    }
    default: return state;
  }
}

// Side Effects
function* requestCart() {
  const url = `${CART_API}/list`;
  const { data: items } = yield get(url);
  yield put(receiveCart({ items }));
}

function* requestAddItem({ payload }) {
  const url = `${CART_API}/item/add`;
  try {
    yield post(url, payload);
    yield put(setSuccess('orderForm'));
  } catch ({ response: { data } = {} }) {
    yield put(setError('orderForm', data));
  }
}

// Sagas
function* watchAddItem() {
  yield takeEvery(ADD, requestAddItem);
}

function* watchRequestCart() {
  yield takeEvery(REQUEST, requestCart);
}

function* sagas() {
  yield all([
    watchAddItem(),
    watchRequestCart(),
  ]);
}

// Selectors
export function selectItems(state) {
  return state.cart.get('items').toJS();
}

export default {
  reducer,
  sagas,
};
