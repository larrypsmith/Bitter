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
      <div className="brewery-show">
        <Brewery brewery={this.props.brewery} />
      </div>
    )
  }

}

const mSTP = (state, ownProps) => {
  return ({
    brewery: state.entities.breweries[ownProps.match.params.id],
  })
}

const mDTP = dispatch => ({
  fetchBrewery: id => dispatch(fetchBrewery(id))
})

export default withRouter(connect(mSTP, mDTP)(BreweryShow))