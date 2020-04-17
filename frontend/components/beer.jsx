import React from 'react';
import Avatar from './avatar';
import Button from './button';
import FlexChild from './flex_child';
import FlexParent from './flex_parent';
import TextBody from './text_body';
import Typography from './typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../actions/modal_actions';

const Beer = ({ beer: { id, name, description, beer_type, subtype, profilePictureUrl } }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openModal('newCheckinForm', { beerId: id }));
  }

  return( 
    <FlexParent>
      <FlexChild>
        <Link to={`/beers/${id}`}>
          <Avatar
            src={profilePictureUrl}
            alt={name}
            size={100}
            square
          />
        </Link>
      </FlexChild>

      <FlexChild grow={1}>
        <Typography size="xl">{name}</Typography>
        <Typography color="darkGray" size="l">
          {beer_type} - {subtype}
        </Typography>
        <TextBody initialBody={description} cutoffLength={275} />
      </FlexChild>

      <FlexChild grow={2} align="center">
        <Button onClick={handleClick}>Check in beer</Button>
      </FlexChild>
    </FlexParent>
  )
}

export default Beer;
