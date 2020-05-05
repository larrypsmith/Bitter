import React from 'react';
import Backdrop from './backdrop';
import DeleteCheckinForm from './delete_checkin_form';
import EditCheckinForm from './edit_checkin_form';
import ModalToolbar from './modal_toolbar';
import NewCheckinForm from './new_checkin_form';
import NewListBeerForm from './new_list_beer_form';
import { useSelector } from 'react-redux';

const Modal = () => {
  let component = useSelector(state => state.ui.modal.component);
  const data = useSelector(state => state.ui.modal.data);

  let title;
  switch (component) {
    case 'newCheckinForm':
      component = <NewCheckinForm beerId={data.beerId} />;
      title = 'Check In';
      break;
    case 'editCheckinForm':
      component = <EditCheckinForm checkinId={data.checkinId} />;
      title = 'Edit Checkin';
      break;
    case 'deleteCheckinForm':
      component = <DeleteCheckinForm checkinId={data.checkinId} />;
      title = 'Delete Checkin'
      break;
    case 'newListBeerForm':
      component = <NewListBeerForm beerId={data.beerId} />;
      title = 'Select a List'
      break;
    default:
      component = null;
  }

  if (!component) return null;
  return(
    <React.Fragment>
      <Backdrop isHidden={!component}/>
      <div className="modal-component-wrapper">
        <ModalToolbar>{title}</ModalToolbar>
        {component}
      </div>
    </React.Fragment>
  )
};

export default Modal;