import React from 'react';

const Button = ({
  children,
  variant,
  onClick,
  className,
  disabled,
  size
}) => {
  const variants = ['contained', 'outlined', 'text'];
  if (!variants.includes(variant)) variant = 'contained';

  const sizes = ['sm', 'md', 'lg'];
  if (!sizes.includes(size)) size = 'md';

  disabled = disabled ? 'disabled' : '';

  const classNames = ['Button', className, variant, size, disabled]

  return(
    <button
      className={classNames.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;