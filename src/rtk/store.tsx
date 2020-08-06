import { configureStore } from '@reduxjs/toolkit';
import loggedUser from './LoggedUser/loggedUserSlice';
const reducer = {
  loggedUser,
};

export default configureStore({ reducer });
