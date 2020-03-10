import React from 'react';
import { Link } from 'react-router-dom';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.descriptionCutoffLength = 130;
    this.state = {
      show: 'More',
      description: this.props.component.description.slice(0, this.descriptionCutoffLength)
    }
    this.changeDescriptionLength = this.changeDescriptionLength.bind(this);
    this.renderShowMoreButton = this.renderShowMoreButton.bind(this);
  }

  changeDescriptionLength(e) {
    if (this.state.show === 'More') {
      this.setState({
        show: 'Less',
        description: this.props.component.description
      })
    } else {
      this.setState({
        show: 'More',
        description: this.props.component.description
          .slice(0, this.descriptionCutoffLength)
      })
    }
  }

  renderShowMoreButton() {
    if (this.props.component.description.length >= this.descriptionCutoffLength) {
      return (
        <button onClick={this.changeDescriptionLength}> ...Show {this.state.show}</button>
      )
    }
  }

  render() {
    const { component: { id, name, profilePictureUrl }, navButton, index, subtitle } = this.props;
    const { description } = this.state;

    return (
      <div className="tile">
        <div className="header">
          <div className="left">
            <Link to={`/${index}/${id}`}>
              <img src={profilePictureUrl} alt={name} />
            </Link>

            <hgroup className="text">
              <h1 className="name">{name}</h1>
              <h2 className="subtitle">{subtitle}</h2>
            </hgroup>
          </div>

          {navButton}
        </div>

        <div className="description">
          <p>{description}</p>
          {this.renderShowMoreButton()}
        </div>
      </div>
    )
  }
}