import React from 'react';

const TextArea = ({ placeholder, value, handleChange }) => (
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

export default TextArea;