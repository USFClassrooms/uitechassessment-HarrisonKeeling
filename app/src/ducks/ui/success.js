// Actions
import { fromJS, isImmutable } from 'immutable';

const SET = 'app/ui/success/SET';
const REMOVE = 'app/ui/success/REMOVE';

// Action Creators
export function removeSuccess(tag) {
  return {
    type: REMOVE,
    tag,
  };
}

export function setSuccess(tag, metadata) {
  return {
    type: SET,
    tag,
    metadata,
  };
}

// Reducer
export default function reducer(state = fromJS({}), action = {}) {
  const { metadata, tag, type } = action;
  switch (type) {
    case REMOVE: {
      return state.deleteIn([tag]);
    }
    case SET: {
      return state.merge(fromJS({ [tag]: metadata || true }));
    }
    default: return state;
  }
}

// Selectors
export function selectSuccess(state, tag) {
  const success = state.ui.success.get(tag);
  return isImmutable(success) ? success.toJS() : success;
}
