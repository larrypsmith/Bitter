import React from 'react';

const Button = ({ children, variant, onClick, className }) => {
  const variants = ['contained', 'outlined', 'text'];
  if (!variants.includes(variant)) variant = 'contained';

  return(
    <button className={`Button-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;