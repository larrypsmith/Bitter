import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import { createListsBeer } from '../actions/lists_beer_actions';
import { closeModal } from '../actions/modal_actions';
import Typography from './typography';

const BeerListListItem = ({ list, beerId }) => {
  const listsBeers = useSelector(state => stateFilter({
    state,
    key1: 'listsBeers',
    key2: 'list_id',
    value: list.id
  }))

  const dispatch = useDispatch();

  const count = listsBeers.length;
  const word = count === 1 ? 'item' : 'items';

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(createListsBeer({
      list_id: list.id,
      beer_id: beerId
    }));
    dispatch(closeModal());
  }

  return(
    <li className="BeerListListItem" onClick={handleClick}>
      <Typography size="md">{list.name}</Typography>
      <Typography color="lightGray">{count} {word}</Typography>
    </li>
  )
};

export default BeerListListItem;