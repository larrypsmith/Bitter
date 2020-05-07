import React from 'react';
import Button from './button';

const IconButton = ({
  children,
  variant,
  onClick,
  icon,
  disabled,
  size
}) => {
  return(
    <Button
      variant={variant}
      onClick={onClick}
      className="IconButton"
      disabled={disabled}
      size={size}
    >
      {icon}
      {children}
    </Button>
  )
};

export default IconButton;