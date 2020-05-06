import React from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../actions/list_actions';
import { closeModal } from '../actions/modal_actions';
import ListForm from './_list_form';

const NewListForm = ({ onCancel }) => {
  const dispatch = useDispatch();
  
  const onSubmit = (e, list) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(createList(list));
    dispatch(closeModal());
  };
  
  return(
    <ListForm onSubmit={onSubmit} onCancel={onCancel} />
  );
};

export default NewListForm; 