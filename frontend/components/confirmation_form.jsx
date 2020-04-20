import React from 'react';
import Button from './button';
import FlexParent from './flex_parent';
import FlexChild from './flex_child';
import Toolbar from './toolbar';
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
    <React.Fragment>
      <Toolbar>
        <FlexParent justify="space-between">
          <FlexChild>
            <Typography size="lg" color="white">{header}</Typography>
          </FlexChild>
          <FlexChild>
            <button onClick={handleClick}>
              <i className="fas fa fa-times" />
            </button>
          </FlexChild>
        </FlexParent>
      </Toolbar>
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
    </React.Fragment>
  )
};

export default ConfirmationForm;