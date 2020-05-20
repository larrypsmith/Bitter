import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../actions/list_actions';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return {...state, ...action.payload.lists};
    case RECEIVE_LIST:
      return {...state, ...action.payload.lists};
    case REMOVE_LIST: {
      const newState = {...state};
      const listId = (Object.keys(action.payload.lists))[0];
      delete newState[listId];
      return newState;
    }
    default:
      return state;
  }
};

export default listsReducer;