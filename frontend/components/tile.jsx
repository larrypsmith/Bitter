import React from 'react';
import { Link } from 'react-router-dom';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.descriptionCutoffLength = 120;
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
        <button onClick={this.changeDescriptionLength}>. . . Show {this.state.show}</button>
      )
    }
  }

  render() {
    const { component: { id, name, profilePictureUrl }, navButton, indexType, subTitle } = this.props;
    const { description } = this.state;

    return (
      <div className="tile">
        <div className="tile-header">
          <div className="tile-header-left">
            <Link to={`${indexType}/${id}`}>
              <img src={profilePictureUrl} alt={name} />
            </Link>

            <div className="tile-header-text">
              <h1 className="tile-name">{name}</h1>
              <div className="tile-location">{subTitle}</div>
            </div>
          </div>

          {navButton}
        </div>

        <div className="tile-body">
          <div className="tile-description">{description}</div>
          {this.renderShowMoreButton()}
        </div>
      </div>
    )
  }
}