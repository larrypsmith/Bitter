import React from 'react';

const Avatar = ({ size = 75, src, alt = "", square, onClick }) => {

  let style;
  if (!square) style = { borderRadius: Math.round(size / 2) };
  
  return(
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="Avatar"
      style={style}
      onClick={onClick}
    />
  )
};

export default Avatar;