// Actions
import { fromJS, isImmutable } from 'immutable';

const REMOVE = 'app/ui/error/REMOVE';
const SET = 'app/ui/error/SET';

// Action Creators
export function removeError(tag) {
  return {
    type: REMOVE,
    tag,
  };
}

export function setError(tag, metadata) {
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
export function selectError(state, tag) {
  const error = state.ui.error.get(tag);
  return isImmutable(error) ? error.toJS() : error;
}
