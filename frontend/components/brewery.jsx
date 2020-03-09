import React from 'react';
import { Link } from 'react-router-dom';

export default class Brewery extends React.Component {
  constructor(props) {
    super(props);
    this.descriptionCutoffLength = 120;
    this.state = {
      show: 'More',
      description: this.props.brewery.description.slice(0, this.descriptionCutoffLength)
    }
    this.changeDescriptionLength = this.changeDescriptionLength.bind(this);
    this.renderShowMoreButton = this.renderShowMoreButton.bind(this);
    this.renderViewBeersButton = this.renderViewBeersButton.bind(this);
  }

  changeDescriptionLength(e) {
    if (this.state.show === 'More') {
      this.setState({
        show: 'Less',
        description: this.props.brewery.description
      })
    } else {
      this.setState({
        show: 'More',
        description: this.props.brewery.description
          .slice(0, this.descriptionCutoffLength)
      })
    }
  }

  renderShowMoreButton() {
    if (this.props.brewery.description.length >= this.descriptionCutoffLength) {
      return (
        <button onClick={this.changeDescriptionLength}>. . . Show {this.state.show}</button>
      )
    }
  }

  renderViewBeersButton() {
    if (this.props.viewBeersButton) {
      return (
        <Link to={`breweries/${this.props.brewery.id}`}>View Beers</Link>
      )
    }
  }


  render() {
    const { brewery: { id, name, city, state, country, profilePictureUrl } } = this.props;
    const { description } = this.state;

    return (
      <div className="brewery">
        <div className="brewery-header">
          <Link to={`breweries/${id}`}>
            <img src={profilePictureUrl} alt={name}/>
          </Link>

          <div className="brewery-header-text">
            <h1 className="brewery-name">{name}</h1>
            <div className="brewery-location">{city}, {state} {country}</div>
          </div>

          {this.renderViewBeersButton()}
        </div>

        <div className="brewery-body">
          <div className="brewery-description">{description}</div>
          {this.renderShowMoreButton()}
        </div>
      </div>
    )
  }
}