import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './rating';

export default class Checkin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, beer, brewery, checkin } = this.props;
    return (
      <li className="tile">
        <header>
          <Link to={`users/${user.id}`}>
            <img src={user.profilePictureUrl} alt="" className="user-profile-picture" />
          </Link>

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

          <img className="beer-profile-picture" src={beer.profilePictureUrl} alt={`${beer.name}.jpg`}/>
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