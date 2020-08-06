import { Dispatch } from '@reduxjs/toolkit';
import { ILoginForm } from '../../components/Login/LoginForm';
import axiosInstance from '../axiosInstance';
import {
  logout,
  toggleLoading,
  userFound,
  updateUser,
} from './loggedUserSlice';
export const loadUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleLoading(true));
    try {
      const { data } = await axiosInstance.get('/auth/refresh-token');
      dispatch(userFound(data));
    } catch (err) {
      dispatch(logout());
    }
  };
};

export const loginAction = (
  formData: ILoginForm,
  setFieldError: (field: string, message: string) => void
) => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleLoading(true));
    try {
      const { data } = await axiosInstance.post('/auth/login', formData);
      dispatch(userFound(data));
    } catch (err) {}
  };
};

export const logoutAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleLoading(true));
    try {
      const { data } = await axiosInstance.delete('/auth/logout');
      data && dispatch(logout());
    } catch (err) {}
  };
};

export const uploadImageAction = (formData: FormData) => {
  return async (dispatch: Dispatch) => {
    try {
      const options = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await axiosInstance.post(
        '/users/upload',
        formData,
        options
      );
      dispatch(updateUser(data));
    } catch (err) {}
  };
};
