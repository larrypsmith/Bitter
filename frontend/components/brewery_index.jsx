import React from 'react'
import Brewery from './brewery';

export default class BreweryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return (!this.props.breweries)
    ? null
    : (
      <div className="brewery-index">
        {this.props.breweries.map((brewery, idx) =>
          (<Brewery
            brewery={brewery}
            key={idx}
          />)
        )}
      </div>
    )
  }
}