import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { stateFilter } from '../reducers/selectors';
import { fetchUserLists } from '../actions/list_actions'
import { openModal } from '../actions/modal_actions';
import BeerListList from './beer_list_list';
import NewListForm from './new_list_form';
import Typography from './typography';

const NewListsBeerForm = ({ beerId }) => {
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
  }, [dispatch, currentUser.id]);

  const onCancelNewList = (e) => {
    e.stopPropagation();

    dispatch(openModal({
      component: <NewListsBeerForm beerId={beerId} />,
      title: 'Select a List'
    }))
  }

  const openNewListForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(openModal({
      component: <NewListForm onCancel={onCancelNewList} />,
      title: 'Create New List'
    }));
  }

  if (!lists.length) return null;
  return(
    <div className="NewListsBeerForm">
      <BeerListList lists={lists} beerId={beerId} />
      <div className="create-new-list" onClick={openNewListForm}>
        <i className="fas fa-plus-circle fa-2x"></i>
        <Typography bold>Create a New List</Typography>
      </div>
    </div>
  );
}

export default NewListsBeerForm;