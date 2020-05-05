import { combineReducers } from 'redux';
import users from './users_reducer';
import breweries from './breweries_reducer';
import beers from './beers_reducer';
import checkins from './checkins_reducer';
import lists from './lists_reducer';
import listsBeers from './lists_beers_reducer';

const entitiesReducer = combineReducers({
  users,
  breweries,
  beers,
  checkins,
  lists,
  listsBeers
})

export default entitiesReducer;