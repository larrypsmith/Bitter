import React from 'react';

const FlexChild = ({ children, grow, align }) => {
  const style = {
    flexGrow: grow,
    alignSelf: align  
  };
  
  return(
    <div className="FlexChild" style={style}>
      {children}
    </div>
  )
};

export default FlexChild;