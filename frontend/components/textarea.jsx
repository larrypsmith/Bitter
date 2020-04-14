import React from 'react';

export default ({ placeholder, value, handleChange }) => (
  <textarea
    cols="30"
    rows="3"
    className="Textarea"
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    maxLength={255}
  />
);