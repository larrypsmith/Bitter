import React from 'react';
import IconButton from './icon_button';

const CheckInButton = ({ onClick, disabled, size }) => (
  <IconButton
    onClick={onClick}
    icon={<i className="fas fa-check"></i>}
    disabled={disabled}
    size={size}
  >
    Check In
  </IconButton>
)

export default CheckInButton;