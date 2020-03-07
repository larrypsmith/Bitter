import React from 'react'

export default class BreweryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return (
      <div>Brewery Index</div>
    )
  }
}