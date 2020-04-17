import React from 'react';

const FlexChild = ({ children, grow }) => {
  const style = { flexGrow: grow };
  
  return(
    <div className="FlexChild" style={style}>
      {children}
    </div>
  )
};

export default FlexChild;