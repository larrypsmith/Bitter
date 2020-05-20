import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteListsBeer } from '../actions/lists_beer_actions';
import { closeModal } from '../actions/modal_actions';
import ConfirmationForm from './confirmation_form';

const DeleteListsBeerConfirmationForm = ({ listsBeerId }) => {
  const dispatch = useDispatch();
  
  const onSubmit = (e) => {
    e.stopPropagation();

    dispatch(deleteListsBeer(listsBeerId));
    dispatch(closeModal());
  }
  
  return(
    <ConfirmationForm onSubmit={onSubmit} />
  )
};

export default DeleteListsBeerConfirmationForm;