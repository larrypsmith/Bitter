import React from 'react';

const TextArea = ({ placeholder, value, onChange }) => (
  <textarea
    cols="30"
    rows="3"
    className="Textarea"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    maxLength={255}
  />
);

export default TextArea;