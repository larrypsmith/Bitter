import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _nullState = { component: null, title: null }

export default (state = _nullState, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case OPEN_MODAL:
      return action.data;
    case CLOSE_MODAL:
      return _nullState;
    default:
      return state;
  }
};