import React from 'react';
import CheckinForm from './_checkin_form';
import { createCheckin } from '../actions/checkin_actions';

export default ({ beerId }) => (
  <CheckinForm beerId={beerId} submitAction={createCheckin} />
);