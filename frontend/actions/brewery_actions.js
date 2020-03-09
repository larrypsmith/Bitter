import * as BreweryAPIUtil from '../util/brewery_api_util';

export const RECEIVE_BREWERIES = 'RECEIVE_BREWERIES';
export const RECEIVE_BREWERY = 'RECEIVE_BREWERY';

const receiveBreweries = breweries => ({
  type: RECEIVE_BREWERIES,
  breweries
})

const receiveBrewery = payload => ({
  type: RECEIVE_BREWERY,
  payload
})

export const fetchBreweries = () => dispatch => (BreweryAPIUtil.fetchBreweries())
  .then(breweries => dispatch(receiveBreweries(breweries)))

export const fetchBrewery = breweryId => dispatch => (BreweryAPIUtil.fetchBrewery(breweryId))
  .then(payload => dispatch(receiveBrewery(payload)))