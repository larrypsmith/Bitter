import { connect } from 'react-redux';
import Tile from './tile';

const mSTP = (state, ownProps) => ({
  component: ownProps.beer,
  indexType: 'beers',
  subTitle: `${ownProps.beer.beer_type} - ${ownProps.beer.subtype}`,
  navButton: () => (
    <div>
      Check in beer
    </div>
  )
})

export default connect(mSTP)(Tile)