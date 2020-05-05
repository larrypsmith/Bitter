import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import Avatar from './avatar';
import FlexChild from './flex_child';
import FlexParent from './flex_parent';
import NewListsBeerForm from './new_lists_beer_form';
import NewCheckinForm from './new_checkin_form';
import IconButton from './icon_button';
import TextBody from './text_body';
import Typography from './typography';

const Beer = ({ beer: { id, name, description, beer_type, subtype, profilePictureUrl } }) => {
  const dispatch = useDispatch();

  const handleClick = (e, component) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(openModal(component));
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
        <IconButton
          onClick={(e) => handleClick(e, <NewCheckinForm beerId={id} />)}
          icon={<i className="fas fa-check"></i>}
        >
          Check In Beer
        </IconButton>
        <IconButton
          onClick={(e) => handleClick(e, <NewListsBeerForm beerId={id} />)}
          icon={<i className="fas fa-plus"></i>}
        >
          Add Beer to List
        </IconButton>
      </FlexChild>
    </FlexParent>
  )
}

export default Beer;
