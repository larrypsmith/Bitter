import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import FlexChild from './flex_child';
import FlexParent from './flex_parent';
import Toolbar from './toolbar';
import Typography from './typography';

const ModalToolbar = ({ children }) => {
  const dispatch = useDispatch();
  
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(closeModal());
  }

  return(
    <Toolbar>
      <FlexParent justify='space-between'>
        <FlexChild>
          <Typography size="lg" color="white">{children}</Typography>
        </FlexChild>
        <FlexChild>
          <button onClick={handleClick}>
            <i className="fas fa-times" />
          </button>
        </FlexChild>
      </FlexParent>
    </Toolbar>
  )
}

export default ModalToolbar;