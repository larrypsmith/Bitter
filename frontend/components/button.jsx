import React from 'react';

const Button = ({ children, variant, onClick }) => {
  const variants = ['contained', 'outlined', 'text'];
  if (!variants.includes(variant)) variant = 'contained';

  return(
    <button className={`Button-${variant}`} onClick={onClick}>
      {children}
    </button>
  )
};

export default Button;