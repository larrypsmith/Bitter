import React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from './backdrop';
import ModalToolbar from './modal_toolbar';

const Modal = () => {
  let { component, title } = useSelector(state => state.ui.modal);

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