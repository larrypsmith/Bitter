import { connect } from 'react-redux';
import Brewery from './brewery';

const mSTP = (state, ownProps) => ({
  brewery: ownProps.brewery,
  viewBeersButton: true
})

export default connect(mSTP)(Brewery)