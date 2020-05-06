import React from 'react';
import Typography from './typography';

const ListFormInput = ({ label, type, value, onChange}) => (
  <React.Fragment>
    <Typography>{label}</Typography>
    <input type={type} value={value} onChange={onChange} />
  </React.Fragment>
);

export default ListFormInput;