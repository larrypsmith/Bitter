import React from 'react';
import CheckinForm from './_checkin_form';
import { createCheckin } from '../actions/checkin_actions';

const NewCheckinForm = ({ beerId }) => (
  <CheckinForm beerId={beerId} onSubmitAction={createCheckin} />
);

export default NewCheckinForm;