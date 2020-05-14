import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { stateFilter } from '../reducers/selectors'
import BeerListListItem from './beer_list_list_item';

const BeerListList = ({ userId, beerId }) => {
  const lists = useSelector(state => stateFilter({
    state,
    key1: 'lists',
    key2: 'user_id',
    value: userId
  }), shallowEqual);
  
  if (!lists.length) return null;
  return(
   <ul className="BeerListList">
     {
      lists.map(list => (
        <BeerListListItem
          list={list}
          key={list.id}
          beerId={beerId}
        />
      ))
     }
   </ul> 
  )
};

export default BeerListList;