import React from 'react';
import CheckinForm from './checkin_form';
import Backdrop from './backdrop';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const modalType = useSelector(state => state.ui.modal);

  let component;
  switch (modalType) {
    case 'checkinForm':
      component = <CheckinForm />
      break;
    default:
      component = null;
  }

  return(
    <React.Fragment>
      <Backdrop isHidden={!component}/>
      {component}
    </React.Fragment>
  )
}