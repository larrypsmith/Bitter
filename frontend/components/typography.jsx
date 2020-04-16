import React from 'react';

const Typography = ({ children, color, size = 14 }) => {

  let style = {
    fontSize: size
  };

  let className = "Typography";
  switch (color) {
    case 'black':
      className += 'black'
      break;
    case 'brown':
      className += 'brown'
      break;
    case 'lightGray':
      className += 'light-gray'
      break;
    case 'darkGray':
      className += 'dark-gray'
      break;
    case 'white':
      className += 'white'
      break;
    default:
      className += "black"
  }

  return(
    <div className={className} style={style}>
      {children}
    </div>
  )
}

export default Typography;