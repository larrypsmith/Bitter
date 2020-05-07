import React from 'react';

const Typography = ({ children, color, size, bold = false, gutterBottom = false }) => {
  const colors = ['black', 'brown', 'lightGray', 'darkGray', 'white', 'orange'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

  color = colors.includes(color) ? color : 'black';
  size = sizes.includes(size) ? size : 'sm';

  let classes = ['Typography', size, color];
  if (bold) classes.push('bold');
  if (gutterBottom) classes.push('gutterBottom')

  return(
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}

export default Typography;