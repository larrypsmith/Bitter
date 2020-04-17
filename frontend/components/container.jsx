import React from 'react';

const Container = ({ children, maxWidth = "lg" }) => {
  let width;

  switch (maxWidth) {
    case 'xs':
      width = 600
      break;
    case 'sm':
      width = 768
      break;
    case 'md':
      width = 992
      break;
    case 'lg':
      width = 1200
      break;
    default:
      width = 992
      break;
  }
  
  let style = { maxWidth: width };

  return(
    <div className="Container" style={style}>
      {children}
    </div>  
  )
};

export default Container;