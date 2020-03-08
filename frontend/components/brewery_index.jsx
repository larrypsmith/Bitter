import React from 'react'
import BreweryIndexItemContainer from './brewery_index_item_container';

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
          (<BreweryIndexItemContainer
            brewery={brewery}
            key={idx} />)
          )
        }
      </div>
    )
  }

}