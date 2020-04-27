import { createReducer, createActions } from 'reduxsauce'

/* ------------- Initial State ------------- */
const defaultState = {
  fetching: false,
  data: null,
  error: null,
}

export const INITIAL_STATE = {
  login: { ...defaultState },
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  postLogin: ['payload'],
  postLoginSuccess: ['data'],
  postLoginFailure: ['error'],
  logout: [''],
})

export const UserTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const postLogin = (state) => ({
  ...state,
  login: {
    fetching: true,
    data: null,
    error: null,
  },
})

export const postLoginSuccess = (state, { data }) => ({
  ...state,
  login: {
    fetching: false,
    data: data,
    error: null,
  },
})

export const postLoginFailure = (state, error) => ({
  ...state,
  login: {
    fetching: false,
    data: null,
    error,
  },
})

export const logout = (state) => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_LOGIN]: postLogin,
  [Types.POST_LOGIN_SUCCESS]: postLoginSuccess,
  [Types.POST_LOGIN_FAILURE]: postLoginFailure,
  [Types.LOGOUT]: logout,
})
