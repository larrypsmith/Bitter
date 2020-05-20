import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal } from '../actions/modal_actions';
import Avatar from './avatar';
import DeleteListsBeerConfirmationForm from './delete_lists_beer_confirmation_form';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import ListItem from './list_item';
import TrashIcon from './trash_icon';
import Typography from './typography';

const BeerListItem = ({ listsBeer }) => {
  const beer = useSelector(state => state.entities.beers[listsBeer.beer_id]);
  const brewery = useSelector(state => state.entities.breweries[beer.brewery_id]);

  const dispatch = useDispatch();

  const openDeleteListsBeerConfirmationForm = (e) => {
    e.stopPropagation();

    dispatch(openModal({
      component: <DeleteListsBeerConfirmationForm
        listsBeerId={listsBeer.id}
      />,
      title: `Remove Beer from List`
    }))
  }

  if (!beer || !brewery) return null;
  return(
    <ListItem>
      <FlexParent
        justify='space-between'
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

        <FlexChild grow={1}>
          <Link
            to={`/breweries/${beer.brewery_id}`}
            onClick={() => dispatch(closeModal())}
          >
            <Typography size="lg">{beer.name}</Typography>
            <Typography size="md" color="lightGray">{brewery.name}</Typography>
          </Link>
        </FlexChild>

        <FlexChild>
          <TrashIcon onClick={openDeleteListsBeerConfirmationForm} />
        </FlexChild>
      </FlexParent>
    </ListItem>
  )
}

export default BeerListItem;