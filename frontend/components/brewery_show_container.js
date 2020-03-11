import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import BreweryShow from './brewery_show';
import { fetchBrewery } from '../actions/brewery_actions'

const mSTP = (state, ownProps) => {
  return ({
    brewery: state.entities.breweries[ownProps.match.params.id],
    beers: Object.values(state.entities.beers)
  })
}

const mDTP = dispatch => ({
  fetchBrewery: id => dispatch(fetchBrewery(id))
})

export default withRouter(connect(mSTP, mDTP)(BreweryShow))