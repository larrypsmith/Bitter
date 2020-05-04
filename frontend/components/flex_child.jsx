import React from 'react';

const FlexChild = ({ basis, children, grow, align, className = "" }) => {
  const style = {
    flexBasis: basis,
    flexGrow: grow,
    alignSelf: align,
  };
  
  return(
    <div className={`FlexChild ${className}`} style={style}>
      {children}
    </div>
  )
};

export default FlexChild;