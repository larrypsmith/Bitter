import React from 'react';
import Button from './button';

const IconButton = ({ children, variant, onClick, icon }) => {
  return(
    <Button
      variant={variant}
      onClick={onClick}
      className="IconButton"
    >
      {icon}
      {children}
    </Button>
  )
};

export default IconButton;