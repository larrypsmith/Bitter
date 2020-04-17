import React from 'react';
import ConfirmationForm from 'react';
import { useDispatch } from 'react-redux';
import { deleteCheckin } from '../actions/checkin_actions';
import { closeModal } from '../actions/modal_actions';

const DeleteCheckinForm = ({ checkinId }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteCheckin(checkinId));
    dispatch(closeModal());
  }

  return(
    <ConfirmationForm
      onSubmit={handleSubmit}
      header="Delete Checkin"
    />
  )
};

export default DeleteCheckinForm;