import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../actions/user_actions';
import AuthApp from './auth_app';
import ProtectedApp from './protected_app';


const App = () => {
  const currentUserId = useSelector(state => state.session.id);
  const isLoggedIn = Boolean(currentUserId);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchUser(currentUserId))
  }, [dispatch, currentUserId, isLoggedIn])
  
  return isLoggedIn ? <ProtectedApp /> : <AuthApp />
}

export default App;