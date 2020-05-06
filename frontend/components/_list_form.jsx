import React, { useState } from 'react';
import Button from './button';
import Textarea from './textarea';
import Typography from './typography';

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
      <Typography bold>List Name</Typography>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        className="Textarea"
      />
      <Typography bold>Description</Typography>
      <Textarea
        value={description}
        onChange={e => setDescription(e.currentTarget.value)}
      />
      <Button onClick={handleSubmit}>Create List</Button>
      <Button onClick={handleCancel} variant="text">Cancel</Button>
    </div>
  )
}

export default ListForm;