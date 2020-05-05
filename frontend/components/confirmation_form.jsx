import React from 'react';
import Button from './button';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import Typography from './typography';
import { closeModal } from '../actions/modal_actions';
import { useDispatch } from 'react-redux';

const ConfirmationForm = ({ onSubmit, header }) => {
  const dispatch = useDispatch();
  
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(closeModal());
  };

  return(
    <div className="ConfirmationForm">
      <Typography>Are you sure?</Typography>
      <FlexParent justify="flex-end">
        <FlexChild>
          <Button variant="outlined" onClick={handleClick}>Cancel</Button>
        </FlexChild>
        <FlexChild>
          <Button onClick={onSubmit}>Confirm</Button>
        </FlexChild>
      </FlexParent>
    </div>
  )
};

export default ConfirmationForm;