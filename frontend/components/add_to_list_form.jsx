import React from 'react';
import { useSelector } from 'react-redux';
import Toolbar from './toolbar';

const AddToListForm = ({ beerId }) => {
  const currentUser = useSelector(state => state.entities.users[state.session.id]);
  // const lists = useSelector(state => )

  return(
    
  );
}

export default AddToListForm;