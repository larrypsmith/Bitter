import { RECEIVE_BREWERIES, RECEIVE_BREWERY } from '../actions/brewery_actions';

const breweriesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_BREWERIES:
      return action.breweries
    case RECEIVE_BREWERY:
      return Object.assign({}, state, { [action.brewery.id]: action.brewery })
    default:
      return state;
  }
}

export default breweriesReducer