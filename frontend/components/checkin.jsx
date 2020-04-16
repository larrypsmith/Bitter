import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './rating';
import { openModal } from '../actions/modal_actions'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './avatar';
import Typography from './typography';
import SpeechBalloon from './speech_balloon';
import Authorized from './authorized';

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
    <div className="Checkin">
      <Link to={`/users/${user.id}`}>
        <Avatar src={user.profilePictureUrl} alt={`${user.username}.jpg`}/>
      </Link>

      <div>
        <Typography size="md">
          <Link
            to={`/users/${user.id}`}
            className="link">
            {user.username}
          </Link>
          &nbsp;
          is drinking a {beer.name} from
          &nbsp;
          <Link
            to={`/breweries/${brewery.id}`}
            className="link">
            {brewery.name}
          </Link>
        </Typography>

        <SpeechBalloon>
          <Rating rating={checkin.rating} />
          <Typography size="lg">{checkin.body}</Typography>
        </SpeechBalloon>

        <Authorized userId={user.id}>
          <Typography size="xs">
            <button className="link" onClick={handleClick}>
              Edit Checkin
            </button>
          </Typography>
        </Authorized>
      </div>

      <Avatar
        src={beer.profilePictureUrl}
        alt={`${beer.name}.jpg`}
        square
      />
    </div>
  )
}

export default Checkin;