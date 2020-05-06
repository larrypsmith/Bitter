import { RECEIVE_LISTS, RECEIVE_LIST } from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return {...state, ...action.payload.lists};
    case RECEIVE_LIST:
      return {...state, ...action.payload.lists};
    default:
      return state;
  }
};

export default listsReducer;