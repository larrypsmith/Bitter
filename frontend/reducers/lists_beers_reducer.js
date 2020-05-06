import { RECEIVE_LISTS } from '../actions/list_actions';
import { RECEIVE_LISTS_BEER } from '../actions/lists_beer_actions';

const listsBeersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return { ...state, ...action.payload.listsBeers };
    case RECEIVE_LISTS_BEER:
      return { ...state, ...action.payload.listsBeers };
    default:
      return state;
  }
};

export default listsBeersReducer;