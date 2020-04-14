import React from 'react';
import NewCheckinForm from './new_checkin_form';
import EditCheckinForm from './edit_checkin_form';
import Backdrop from './backdrop';
import { useSelector } from 'react-redux';

export default () => {
  let component = useSelector(state => state.ui.modal.component);
  const data = useSelector(state => state.ui.modal.data);

  switch (component) {
    case 'newCheckinForm':
      component = <NewCheckinForm beerId={data.beerId} />
      break;
    case 'editCheckinForm':
      component = <EditCheckinForm checkinId={data.checkinId} />
      break;
    default:
      component = null;
  }

  return(
    <React.Fragment>
      <Backdrop isHidden={!component}/>
      <div className="modal-component-wrapper">{component}</div>
    </React.Fragment>
  )
}