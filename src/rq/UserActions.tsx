import axiosInstance from '../helpers/axiosInstance';
import { ILoginForm } from '../components/Login/LoginForm';

export const getLoggedUser = async () => {
  const { data } = await axiosInstance.get('/auth/refresh-token');
  return data;
};
export const login = async (formData:ILoginForm) => {
  const { data } = await axiosInstance.post('/auth/login', formData);
  return data;
}
