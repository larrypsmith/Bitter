import { connect } from 'react-redux';
import Brewery from './brewery';
import React from 'react';
import { Link } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
  brewery: ownProps.brewery,
  viewBeersButton: (
    <Link to={`breweries/${ownProps.brewery.id}`}>View Beers</Link>
  )
})

export default connect(mSTP)(Brewery)