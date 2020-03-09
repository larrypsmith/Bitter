import React from 'react';
import Brewery from './brewery';
import BeerIndexContainer from './beer_index_container';

export default class BreweryShow extends React.Component {

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.id)
  }

  render() {
    if (!this.props.brewery) return null;
    return (
      <div className="brewery-show">
        <Brewery brewery={this.props.brewery} />
        <BeerIndexContainer />
      </div>
    )
  }
}