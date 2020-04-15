import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './rating';
import { openModal } from '../actions/modal_actions'
import { useDispatch, useSelector } from 'react-redux';

export default ({ checkin }) => {
  const user = useSelector(state => state.entities.users[checkin.user_id]);
  const beer = useSelector(state => state.entities.beers[checkin.beer_id]);
  const brewery = useSelector(state => state.entities.breweries[beer.brewery_id]);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openModal('editCheckinForm', { checkinId: checkin.id }));
  }

  return (
    <li className="tile">
      <header>
        <Link to={`users/${user.id}`}>
          <img
            src={user.profilePictureUrl}
            alt=""
            className="user-profile-picture"
          />
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

        <img
          className="beer-profile-picture"
          src={beer.profilePictureUrl}
          alt={`${beer.name}.jpg`}
        />
      </header>

      <ul className="stat-bar">
        <Rating rating={checkin.rating} />
      </ul>

      <p>
        {/* {checkin.body} */}
      </p>

      <button onClick={handleClick} className="link">
        Edit checkin
      </button>
    </li>
  )
}