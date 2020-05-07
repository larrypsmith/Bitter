import React from 'react';
import IconButton from './icon_button';

const AddToListButton = ({ onClick, disabled, size }) => (
  <IconButton
    onClick={onClick}
    icon={<i className="fas fa-plus"></i>}
    disabled={disabled}
    size={size}
  >
    Add to List
  </IconButton>
)

export default AddToListButton;