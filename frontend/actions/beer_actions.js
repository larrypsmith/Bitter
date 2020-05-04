import * as BeerAPIUtil from '../util/beer_api_util';

export const RECEIVE_BEERS = 'RECEIVE_BEERS';

const receiveBeers = (payload) => ({
  type: 'RECEIVE_BEERS',
  payload
})

export const fetchBeers = () => dispatch => BeerAPIUtil.fetchBeers()
  .then(payload => dispatch(receiveBeers(payload)))