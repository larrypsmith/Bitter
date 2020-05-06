import React, { useState } from 'react';
import Button from './button';
import Textarea from './textarea';

const ListForm = ({
  initialName = '',
  initialDescription = '',
  onSubmit,
  onCancel: handleCancel
}) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = e => {
    onSubmit(e, { name, description });
  };

  return(
    <div className="ListForm">
      <label>List Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
        />
      </label>
      <label>Description
        <Textarea
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
        />
      </label>
      <Button onClick={handleSubmit}>Create List</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  )
}

export default ListForm;