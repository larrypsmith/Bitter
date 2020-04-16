import React from 'react';

const Typography = ({ children, color, size, bold = false }) => {
  const colors = ['black', 'brown', 'lightGray', 'darkGray', 'white', 'orange'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

  color = colors.includes(color) ? color : 'black';
  size = sizes.includes(size) ? size : 'sm';

  let classes = ['Typography', size, color];
  if (bold) classes.push('bold');

  return(
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Typography;