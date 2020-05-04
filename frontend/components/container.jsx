import React from 'react';

const Container = ({ children, maxWidth, className = "" }) => {
  const widths = {
    'xs': 600,
    'sm': 768,
    'md': 992,
    'lg': 1200,
  }
  
  let style = { maxWidth: widths[maxWidth] || widths['lg'] };

  return(
    <div className={`Container ${className}`} style={style}>
      {children}
    </div>  
  )
};

export default Container;