import { combineReducers } from 'redux';
import modal from './modal_reducer';
import snackbar from './snackbar_reducer';

export default combineReducers({
  modal,
  snackbar
})