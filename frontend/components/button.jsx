import React from 'react';

const Button = ({ children, variant }) => {
  const variants = ['contained', 'outlined', 'text'];
  if (!variants.includes(variant)) variant = 'contained';

  return(
    <button className={`Button-${variant}`}>
      {children}
    </button>
  )
};

export default Button;