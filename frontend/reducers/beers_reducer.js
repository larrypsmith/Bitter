import { RECEIVE_BREWERY } from '../actions/brewery_actions'

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BREWERY:
      return action.payload.beers;
    default:
      return state;
  }
}

export default beersReducer