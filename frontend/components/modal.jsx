import React from 'react';
import Backdrop from './backdrop';
import { useSelector } from 'react-redux';

const Modal = () => {
  let component = useSelector(state => state.ui.modal.component);

  if (!component) return null;
  return(
    <React.Fragment>
      <Backdrop isHidden={!component}/>
      <div className="modal-component-wrapper">
        {/* <ModalToolbar>{title}</ModalToolbar> */}
        {component}
      </div>
    </React.Fragment>
  )
};

export default Modal;