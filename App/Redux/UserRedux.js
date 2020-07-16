import { createReducer, createActions } from 'reduxsauce';

/* ------------- Initial State ------------- */
const defaultState = {
  fetching: false,
  data: null,
  error: null,
};

export const INITIAL_STATE = {
  accessToken: null,
  login: { ...defaultState },
  postVerifyNumber: { ...defaultState },
};

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  postLogin: ['audience'],
  postLoginSuccess: ['data'],
  postLoginFailure: ['error'],
  postVerifyNumber: ['audience_verification'],
  postVerifyNumberSuccess: ['data'],
  postVerifyNumberFailure: ['error'],
  logout: [''],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */

export const postLogin = (state) => ({
  ...state,
  login: {
    fetching: true,
    data: null,
    error: null,
  },
});

export const postLoginSuccess = (state, { data }) => ({
  ...state,
  accessToken: data.access_token,
  login: {
    fetching: false,
    data: data.audience,
    error: null,
  },
});

export const postLoginFailure = (state, error) => ({
  ...state,
  login: {
    fetching: false,
    data: null,
    error,
  },
});

export const postVerifyNumber = (state) => ({
  ...state,
  postVerifyNumber: {
    fetching: true,
    data: null,
    error: null,
  },
});

export const postVerifyNumberSuccess = (state, { data }) => ({
  ...state,
  postVerifyNumber: {
    fetching: false,
    data,
    error: null,
  },
});

export const postVerifyNumberFailure = (state, error) => ({
  ...state,
  postVerifyNumber: {
    fetching: false,
    data: null,
    error,
  },
});

export const logout = (state) => INITIAL_STATE;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_LOGIN]: postLogin,
  [Types.POST_LOGIN_SUCCESS]: postLoginSuccess,
  [Types.POST_LOGIN_FAILURE]: postLoginFailure,
  [Types.POST_VERIFY_NUMBER]: postVerifyNumber,
  [Types.POST_VERIFY_NUMBER_SUCCESS]: postVerifyNumberSuccess,
  [Types.POST_VERIFY_NUMBER_FAILURE]: postVerifyNumberFailure,
  [Types.LOGOUT]: logout,
});
