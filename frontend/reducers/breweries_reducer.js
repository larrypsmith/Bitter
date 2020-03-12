import { RECEIVE_BREWERIES, RECEIVE_BREWERY } from '../actions/brewery_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const breweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERIES:
      return action.breweries;
    case RECEIVE_BREWERY:
      return Object.assign({}, state, action.payload.breweries);
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload.breweries);
    default:
      return state;
  }
}

export default breweriesReducer