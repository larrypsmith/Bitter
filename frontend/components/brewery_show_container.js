import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchBrewery } from '../actions/brewery_actions'
import { getBeersByBrewery } from '../reducers/selectors';
import BreweryShow from './brewery_show';

const mSTP = (state, ownProps) => {
  const brewery = state.entities.breweries[ownProps.match.params.id];
  let beers
  if (!brewery) {
    beers = null;
  } else {
    beers = getBeersByBrewery(state, brewery)
  }
  
  return ({
    brewery: brewery,
    beers: beers
  })
}

const mDTP = dispatch => ({
  fetchBrewery: id => dispatch(fetchBrewery(id))
})

export default withRouter(connect(mSTP, mDTP)(BreweryShow))