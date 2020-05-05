import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import { fetchUserLists } from '../actions/list_actions'
import Typography from './typography';

const NewListBeerForm = ({ beerId }) => {
  const currentUser = useSelector(state => state.entities.users[state.session.id], shallowEqual);
  const lists = useSelector(state => stateFilter({
    state,
    key1: 'lists',
    key2: 'user_id',
    value: currentUser.id
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserLists(currentUser.id));
  }, [dispatch, currentUser.id]) 

  if (!lists.length) return null;
  return(
    <div className="NewListBeerForm">
      {
        lists.map(list => (
          <div className="beer-list" key={list.id}>
            <Typography>{list.name}</Typography>
          </div>
        ))
      }
    </div>
  );
}

export default NewListBeerForm;