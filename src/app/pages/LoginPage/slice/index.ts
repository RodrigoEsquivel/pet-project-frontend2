import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginWatcherSaga } from './saga';
import { LoginState } from './types';

export const initialState: LoginState = {
  email: '',
  password: '',
  isLogged: false,
  error: false,
  isFetching: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<any>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<any>) {
      state.password = action.payload;
    },
    authSuccess(state) {
      state.isLogged = true;
      state.isFetching = false;
      state.error = false;
    },
    authError(state) {
      state.isLogged = false;
      state.isFetching = false;
      state.error = true;
    },
    fetchingData(state) {
      state.isLogged = false;
      state.isFetching = true;
      state.error = false;
    },
  },
});

export const { actions: loginActions } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginWatcherSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
