import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Brewery from './brewery';
import { fetchBrewery } from '../actions/brewery_actions'
import React from 'react'

class BreweryShow extends React.Component {
  
  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.id)
  }

  render() {
    if (!this.props.brewery) return null;
    return (
      <Brewery brewery={this.props.brewery} viewBeersButton={this.props.viewBeersButton}/>
    )
  }

}

const mSTP = (state, ownProps) => {
  return ({
    brewery: state.entities.breweries[ownProps.match.params.id],
    viewBeersButton: false
  })
}

const mDTP = dispatch => ({
  fetchBrewery: id => dispatch(fetchBrewery(id))
})

export default withRouter(connect(mSTP, mDTP)(BreweryShow))