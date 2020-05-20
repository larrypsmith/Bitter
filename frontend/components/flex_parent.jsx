import React from 'react';

const FlexParent = ({
  children,
  justify = "space-between",
  align = "stretch",
  className = ""
}) => {
  const style = {
    justifyContent: justify,
    alignItems: align
  };

  return(
    <div className={`FlexParent ${className}`} style={style}>
      {children}
    </div>
  )
};

export default FlexParent;