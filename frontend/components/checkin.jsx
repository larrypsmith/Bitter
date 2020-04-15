import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './rating';
import { openModal } from '../actions/modal_actions'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './avatar';

const Checkin = ({ checkin }) => {
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
    <div className="tile">
      <header>
        <Link to={`/users/${user.id}`}>
          <Avatar src={user.profilePictureUrl} alt={`${user.username}.jpg`}/>
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

        <Avatar
          src={beer.profilePictureUrl}
          alt={`${beer.name}.jpg`}
          square
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
    </div>
  )
}

export default Checkin;