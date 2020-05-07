import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackbar } from '../actions/snackbar_actions';
import Typography from './typography';

const Snackbar = () => {
  const message = useSelector(state => state.ui.snackbar);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (message) {
      setTimeout(() => dispatch(closeSnackbar()), 3000);
    }
  }, [message, dispatch])
  
  let opened = message ? 'opened' : '';

  return(
    <div className={`Snackbar ${opened}`}>
      <Typography size="md" color="white">
        {message}
      </Typography>
    </div>
  )
};

export default Snackbar;