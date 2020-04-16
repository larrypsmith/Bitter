import React from 'react';
import { useSelector } from 'react-redux';

const Authorized = ({ userId, children }) => {
  const currentUserId = useSelector(state => state.session.id);
  if (userId !== currentUserId) return null;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default Authorized;