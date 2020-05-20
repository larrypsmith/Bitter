import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateFilter } from '../reducers/selectors'
import { fetchList } from '../actions/list_actions';
import Avatar from './avatar';
import BeerListItem from './beer_list_item';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import Link from 'react-router-dom';
import ListItem from './list_item';
import Typography from './typography';

const BeerList = ({ list }) => {
  const listsBeers = useSelector(state => stateFilter({
    state,
    key1: 'listsBeers',
    key2: 'list_id',
    value: list.id
  }));

  const allBeers = useSelector(state => state.entities.beers)

  const beersInList = Object.values(listsBeers)
    .map(listsBeer => allBeers[listsBeer.beer_id]);

  // const allBreweries = useSelector(state => state.entities.breweries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList(list.id))
  }, [dispatch, list.id]);
  
  if (!beersInList.length) return null;
  return(
    <div className="BeerList">
      {
        beersInList.map(beer => (
          <ListItem key={beer.id}>
            <BeerListItem beer={beer} />
          </ListItem>
        ))
      }
    </div>
  )
};

export default BeerList;