import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import AddToListButton from './add_to_list_button';
import Avatar from './avatar';
import CheckInButton from './check_in_button';
import FlexChild from './flex_child';
import FlexParent from './flex_parent';
import NewListsBeerForm from './new_lists_beer_form';
import NewCheckinForm from './new_checkin_form';
import TextBody from './text_body';
import Typography from './typography';

const Beer = ({ beer: { id, name, description, beer_type, subtype, profilePictureUrl } }) => {
  const dispatch = useDispatch();

  const handleClick = (e, component) => {
    e.preventDefault();
    e.stopPropagation();

    let data;
    switch (component) {
      case 'newCheckinForm':
        data = {
          component: <NewCheckinForm beerId={id} />,
          title: 'Create Checkin'
        }
        break;
      case 'newListsBeerForm':
        data = {
          component: <NewListsBeerForm beerId={id} />,
          title: 'Select a List'
        }
        break;
      default:
        break;
    }

    dispatch(openModal(data));
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
        <CheckInButton onClick={(e) => handleClick(e, 'newCheckinForm')} />
        <AddToListButton onClick={(e) => handleClick(e, 'newListsBeerForm')} />
      </FlexChild>
    </FlexParent>
  )
}

export default Beer;
