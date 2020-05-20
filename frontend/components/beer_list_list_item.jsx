import React from 'react';
import { useSelector } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import Typography from './typography';

const BeerListListItem = ({ list, beerId, onClick }) => {
  const listsBeers = useSelector(state => stateFilter({
    state,
    key1: 'listsBeers',
    key2: 'list_id',
    value: list.id
  }))

  const beerIdsInList = Object.values(listsBeers)
    .map(listsBeer => listsBeer.beer_id);

  const count = listsBeers.length;
  const word = count === 1 ? 'item' : 'items';

  let classNames = ['BeerListListItem'];
  if (beerIdsInList.includes(beerId)) classNames.push('inactive');

  return(
    <li className={classNames.join(' ')} onClick={onClick}>
      <Typography size="md">{list.name}</Typography>
      <Typography color="lightGray">{count} {word}</Typography>
    </li>
  )
};

export default BeerListListItem;