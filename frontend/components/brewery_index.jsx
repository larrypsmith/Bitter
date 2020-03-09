import React from 'react'
import Brewery from './brewery';
import { Link } from 'react-router-dom'

export default class BreweryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return !this.props.breweries ? null : (
      <div className="brewery-index">
        {this.props.breweries.map((brewery, idx) =>
          (<Brewery
            brewery={brewery}
            key={idx}
            viewBeersButton={
              <Link to={`breweries/${brewery.id}`} className="view-beers-button">View Beers</Link>
            }
          />)
        )}
      </div>
    )
  }
}