import React from 'react';

const FlexParent = ({ children, justify = "space-between", className = "" }) => {

  const style = {
    justifyContent: justify,
  };

  return(
    <div className={`FlexParent ${className}`} style={style}>
      {children}
    </div>
  )
};

export default FlexParent;