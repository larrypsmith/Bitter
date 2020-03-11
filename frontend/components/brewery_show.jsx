import React from 'react';
import Brewery from './brewery';
import BeerIndex from './beer_index';

export default class BreweryShow extends React.Component {
  constructor(props) {
    super(props)
    debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchBrewery(this.props.match.params.id)
    debugger
  }

  componentDidUpdate(prevProps) {
    debugger
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchBrewery(this.props.match.params.id)
    }
    debugger
  }

  render() {
    debugger
    const { brewery, beers } = this.props;
    if (!brewery) {
      return null;
    }
    debugger
    return (
      <div className="brewery-show">
        <Brewery brewery={brewery} />
        <BeerIndex beers={beers} />
      </div>
    )
  }
}