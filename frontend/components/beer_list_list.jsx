import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { stateFilter } from '../reducers/selectors'
import { fetchUserLists } from '../actions/list_actions'
import { createListsBeer } from '../actions/lists_beer_actions';
import { closeModal } from '../actions/modal_actions';
import BeerListListItem from './beer_list_list_item';

const BeerListList = ({ userId, beerId }) => {
  const lists = useSelector(state => stateFilter({
    state,
    key1: 'lists',
    key2: 'user_id',
    value: parseInt(userId)
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserLists(userId))
  }, [dispatch, userId])

  const handleListItemClick = (e, listId) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(createListsBeer({
      list_id: listId,
      beer_id: beerId
    }));
    
    dispatch(closeModal());
  }
  
  if (!lists.length) return null;
  return(
    <ul className="BeerListList">
      {
        lists.map(list => (
          <BeerListListItem
            list={list}
            key={list.id}
            beerId={beerId}
            onClick={e => handleListItemClick(e, list.id)}
          />
        ))
      }
    </ul> 
  )
};

export default BeerListList;