import React from 'react';
import ListForm from './_list_form';

const NewListForm = ({ onCancel, onSubmit }) => {
  return(
    <ListForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      submitButtonText={'Create List'} />
  );
};

export default NewListForm; 