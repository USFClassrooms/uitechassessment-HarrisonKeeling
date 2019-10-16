import { combineReducers } from 'redux';
import error from 'ducks/ui/error';
import success from 'ducks/ui/success';

export default combineReducers({
  error,
  success,
});
