import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from './avatar';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import {Link} from 'react-router-dom';
import Typography from './typography';

const BeerListItem = ({ beer }) => {
  const brewery = useSelector(state => state.entities.breweries[beer.brewery_id]);

  const dispatch = useDispatch();

  if (!beer || !brewery) return null;
  return(
    <FlexParent
      justify='flex-start'
      align='center'
    >
      <FlexChild>
        <Avatar
          src={beer.profilePictureUrl}
          alt={beer.name}
          size={50}
          square
        />
      </FlexChild>

      <FlexChild>
        <Link
          to={`/breweries/${beer.brewery_id}`}
          onClick={() => dispatch(closeModal())}
        >
          <Typography size="lg">{beer.name}</Typography>
        </Link>

        <Typography size="md" color="lightGray">{brewery.name}</Typography>
      </FlexChild>
    </FlexParent>
  )
}

export default BeerListItem;