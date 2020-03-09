import { connect } from 'react-redux';
import BeerIndex from './beer_index';

const mSTP = state ({
  beers: Object.values(state.entities.beers)
})

export default connect(mSTP)(BeerIndex)