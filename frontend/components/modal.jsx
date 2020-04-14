import React from 'react';
import NewCheckinForm from './new_checkin_form';
import Backdrop from './backdrop';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  let component = useSelector(state => state.ui.modal.component);
  const beer = useSelector(state => state.ui.modal.data);

  switch (component) {
    case 'checkinForm':
      component = <NewCheckinForm beerId={beer.id} />
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