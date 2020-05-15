import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchUserLists, createList } from '../actions/list_actions'
import { openModal } from '../actions/modal_actions';
import BeerListList from './beer_list_list';
import NewListForm from './new_list_form';
import Typography from './typography';

const NewListsBeerForm = ({ beerId }) => {
  const currentUser = useSelector(state => state.entities.users[state.session.id], shallowEqual);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserLists(currentUser.id));
  }, [dispatch, currentUser.id]);

  const openNewListForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const onCancelNewList = (e) => {
      e.stopPropagation();

      dispatch(openModal({
        component: <NewListsBeerForm beerId={beerId} />,
        title: 'Select a List'
      }))
    }

    const onSubmitNewList = (e, list) => {
      e.preventDefault();
      e.stopPropagation();
      
      dispatch(createList(list))

      dispatch(openModal({
        component: <NewListsBeerForm beerId={beerId} />,
        title: 'Select a List'
      }))
    }

    dispatch(openModal({
      component: <NewListForm onCancel={onCancelNewList} onSubmit={onSubmitNewList} />,
      title: 'Create New List'
    }));
  }

  return(
    <div className="NewListsBeerForm">
      <BeerListList userId={currentUser.id} beerId={beerId} />
      <div className="create-new-list" onClick={openNewListForm}>
        <i className="fas fa-plus-circle fa-2x"></i>
        <Typography bold>Create a New List</Typography>
      </div>
    </div>
  );
}

export default NewListsBeerForm;