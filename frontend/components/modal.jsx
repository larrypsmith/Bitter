import React from 'react';
import Backdrop from './backdrop';
import DeleteCheckinForm from './delete_checkin_form';
import EditCheckinForm from './edit_checkin_form';
import NewCheckinForm from './new_checkin_form';
import { useSelector } from 'react-redux';

const Modal = () => {
  let component = useSelector(state => state.ui.modal.component);
  const data = useSelector(state => state.ui.modal.data);

  switch (component) {
    case 'newCheckinForm':
      component = <NewCheckinForm beerId={data.beerId} />;
      break;
    case 'editCheckinForm':
      component = <EditCheckinForm checkinId={data.checkinId} />;
      break;
    case 'deleteCheckinForm':
      component = <DeleteCheckinForm checkinId={data.checkinId} />;
      break;
    case 'addToListForm':
      component = <AddToListForm beerId={data.beerId} />;
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
};

export default Modal;