import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './rating';

export default class Checkin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchCheckin(this.props.checkin.id)
  }

  componentDidUpdate() {

  }

  render() {
    const { user, beer, brewery, checkin } = this.props;
    return (
      <li className="tile">
        <header>
          <img src={user.profilePictureUrl} alt="" className="user-profile-picture" />
          <h1>
            <Link
              to={`/users/${user.id}`}
              className="link">
              {user.username}
            </Link> is drinking a {beer.name} from <Link
              to={`/breweries/${brewery.id}`}
              className="link">
              {brewery.name}
            </Link>
          </h1>
          <img src={beer.profilePictureUrl} alt={`${beer.name}.jpg`} className="beer-profile-picture" />
        </header>

        <ul className="stat-bar">
          <Rating rating={checkin.rating} />
        </ul>

        <p>
          {/* {checkin.body} */}
        </p>
      </li>
    )
  }
}