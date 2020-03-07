import { connect } from 'react-redux';
import BreweryIndex from './brewery_index';
import { fetchBreweries } from '../actions/brewery_actions';

const mSTP = state => ({
  breweries: Object.values(state.entities.breweries)
})

const mDTP = dispatch => ({
  fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(mSTP, mDTP)(BreweryIndex)