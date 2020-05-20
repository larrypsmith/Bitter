import { RECEIVE_BREWERY } from '../actions/brewery_actions'
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CHECKINS } from '../actions/checkin_actions';
import { RECEIVE_BEERS } from '../actions/beer_actions';
import { RECEIVE_LISTS, RECEIVE_LIST } from '../actions/list_actions';

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERY:
      return Object.assign({}, state, action.payload.beers);
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.beers);
    case RECEIVE_CHECKINS:
      return action.payload.beers;
    case RECEIVE_BEERS:
      return action.payload.beers;
    case RECEIVE_LISTS:
      return {...state, ...action.payload.beers}
    case RECEIVE_LIST:
      return {...state, ...action.payload.beers}
    default:
      return state;
  }
}

export default beersReducer