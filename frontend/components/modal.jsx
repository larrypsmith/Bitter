import React from 'react';
import CheckinForm from './checkin_form';
import Backdrop from './backdrop';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../actions/modal_actions';

export default () => {
  const modalType = useSelector(state => state.ui.modal);
  const dispatch = useDispatch();
  debugger;

  let component;
  switch (modalType) {
    case 'checkinForm':
      component = <CheckinForm />
    default:
      component = null;
  }

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(closeModal);
  }

  return(
    <React.Fragment>
      <Backdrop onClick={handleClick} isHidden={!component}/>
      {component}
    </React.Fragment>
  )
}