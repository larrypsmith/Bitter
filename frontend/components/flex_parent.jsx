import React from 'react';

const FlexParent = ({ children, justify }) => {
  const justifyValues = ["flex-start", "space-between", "space-around", "space-evenly"];
  if (!justifyValues.includes(justify)) justify = "flex-start"

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