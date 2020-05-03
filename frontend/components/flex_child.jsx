import React from 'react';

const FlexChild = ({ children, grow, align, className = "" }) => {
  const style = {
    flexGrow: grow,
    alignSelf: align  
  };
  
  return(
    <div className={`FlexChild ${className}`} style={style}>
      {children}
    </div>
  )
};

export default FlexChild;