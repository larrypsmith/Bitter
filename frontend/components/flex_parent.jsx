import React from 'react';

const FlexParent = ({ children, justify = "space-between" }) => {

  const style = {
    justifyContent: justify
  };

  return(
    <div className="FlexParent" style={style}>
      {children}
    </div>
  )
};

export default FlexParent;