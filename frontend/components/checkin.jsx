import React from 'react';
import Authorized from './authorized';
import Avatar from './avatar';
import Button from './button';
import EditCheckinForm from './edit_checkin_form';
import DeleteCheckinForm from './delete_checkin_form';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import StarBar from './star_bar';
import SpeechBalloon from './speech_balloon';
import Typography from './typography';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../actions/modal_actions'

const Checkin = ({ checkin }) => {
  const user = useSelector(state => state.entities.users[checkin.user_id]);
  const beer = useSelector(state => state.entities.beers[checkin.beer_id]);
  const brewery = useSelector(state => state.entities.breweries[beer.brewery_id]);
  const dispatch = useDispatch();

  const handleClick = (e, component) => {
    e.preventDefault();
    e.stopPropagation();

    let data;
    
    switch (component) {
      case 'editCheckinForm':
        data = {
          component: <EditCheckinForm checkinId={checkin.id} />,
          title: 'Edit Checkin'
        }
        break;
      case 'deleteCheckinForm':
        data = {
          component: <DeleteCheckinForm checkinId={checkin.id} />,
          title: 'Delete Checkin'
        }
        break;
      default:
        break;
    }
    
    dispatch(openModal(data));
  }

  return (
    <FlexParent>
      <FlexChild>
        <Link to={`/users/${user.id}`}>
          <Avatar src={user.profilePictureUrl} alt={`${user.username}.jpg`}/>
        </Link>
      </FlexChild>

      <FlexChild grow={1}>
        <Typography size="md">
          <Link
            to={`/users/${user.id}`}
            className="link"
          >
            {user.username}
          </Link>
          &nbsp;
          is drinking a
          &nbsp;
          <Link
            to={`/breweries/${brewery.id}`}
            className="link"
          >
            {beer.name}
          </Link>
          &nbsp;
          from
          &nbsp;
          <Link
            to={`/breweries/${brewery.id}`}
            className="link"
          >
            {brewery.name}
          </Link>
        </Typography>

        <SpeechBalloon>
          <StarBar rating={checkin.rating} disabled />
          <Typography size="lg">{checkin.body}</Typography>
        </SpeechBalloon>

        <Authorized userId={user.id}>
          <Typography size="xs">
            <Button
              variant="text"
              onClick={e => handleClick(e, 'editCheckinForm')}
            >
              Edit Checkin
            </Button>
            <Button
              variant="text"
              onClick={e => handleClick(e, 'deleteCheckinForm')}
            >
              Delete Checkin
            </Button>
          </Typography>
        </Authorized>
      </FlexChild>

      <FlexChild>
        <Link to={`/breweries/${brewery.id}`}>
          <Avatar
            src={beer.profilePictureUrl}
            alt={`${beer.name}.jpg`}
            square
            />
        </Link>
      </FlexChild>
    </FlexParent>
  )
}

export default Checkin;