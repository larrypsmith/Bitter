import React from 'react';
import Brewery from './brewery';
import BeerIndex from './beer_index';

export default class BreweryShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchBrewery(this.props.match.params.id)
    }
  }

  render() {
    const { brewery, beers } = this.props;
    if (!brewery) {
      return null;
    }
    return (
      <div className="brewery-show">
        <Brewery brewery={brewery} />
        <BeerIndex beers={beers} />
      </div>
    )
  }
}