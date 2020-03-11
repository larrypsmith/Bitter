import React from 'react'
import { Link } from 'react-router-dom'
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
            navButton={
              <Link to={`breweries/${brewery.id}`} className="nav-button">View Brewery</Link>
            }
            key={idx}
          />)
        )}
      </div>
    )
  }
}