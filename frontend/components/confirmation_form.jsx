import React from 'react';
import Button from './button';
import Typography from './typography';
import { closeModal } from '../actions/modal_actions';
import { useDispatch } from 'react-redux';

const ConfirmationForm = ({ onSubmit, header }) => {
  const dispatch = useDispatch();
  
  const handleClick = e => {
    e.preventDefault();
    e.stopPropgation();
    dispatch(closeModal());
  };

  return(
    <div>
      <Typography>{header}</Typography>
      <Typography>Are you sure?</Typography>
      <Button onClick={onSubmit}>Yes</Button>
      <Button onClick={handleClick}>Cancel</Button>
    </div>
  )
};

export default ConfirmationForm;