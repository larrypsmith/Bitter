import React from 'react';

export default ({ isHidden }) => {
  let className = "backdrop";
  if (isHidden) className += "hidden";

  return(
    <div className={className} />
  )
}