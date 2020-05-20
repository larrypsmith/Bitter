import { RECEIVE_LISTS, RECEIVE_LIST } from '../actions/list_actions';
import { RECEIVE_LISTS_BEER, REMOVE_LISTS_BEER } from '../actions/lists_beer_actions';

const listsBeersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return { ...state, ...action.payload.listsBeers };
    case RECEIVE_LISTS_BEER:
      return { ...state, ...action.payload.listsBeers };
    case RECEIVE_LIST:
      return { ...state, ...action.payload.listsBeers };
    case REMOVE_LISTS_BEER: {
      const newState = {...state};
      const listsBeerId = (Object.keys(action.payload.listsBeers))[0];
      delete newState[listsBeerId];
      return newState;
    }
    default:
      return state;
  }
};

export default listsBeersReducer;