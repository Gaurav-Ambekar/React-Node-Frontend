import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type User = {
  user_id: number | string;
  user_name: string;
  user_password: string;
  user_fullname: string;
  user_mobile: string;
  user_email: string;
  user_role: string;
  user_status: boolean;
  user_token_version: number;
  user_avatar: string;
};
export type LoggedUserType = {
  user: User | null;
  token: string;
  loading?: boolean;
  isAuthenticated?: boolean | null;
  financial_year: string;
};

const initialState: LoggedUserType = {
  user: null,
  token: '',
  loading: true,
  isAuthenticated: null,
  financial_year: '',
};

const loggedUser = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    toggleLoading: (
      state: LoggedUserType,
      { payload }: PayloadAction<boolean>
    ) => {
      return { ...state, loading: payload };
    },
    userFound: (
      state: LoggedUserType,
      { payload }: PayloadAction<LoggedUserType>
    ) => {
      localStorage.setItem('authorization', payload.token);
      return { ...payload, isAuthenticated: true, loading: false };
    },
    updateUser: (state: LoggedUserType, { payload }: PayloadAction<User>) => {
      return { ...state, user: payload };
    },
    logout: (state: LoggedUserType) => {
      localStorage.removeItem('authorization');
      return { ...initialState, loading: false };
    },
  },
});

export const {
  toggleLoading,
  userFound,
  logout,
  updateUser,
} = loggedUser.actions;
export default loggedUser.reducer;
