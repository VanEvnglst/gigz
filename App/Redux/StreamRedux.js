import { createReducer, createActions } from 'reduxsauce'

/* ------------- Initial State ------------- */
const defaultState = {
  fetching: false,
  data: null,
  error: null,
}

export const INITIAL_STATE = {
  getStreams: { ...defaultState },
  getSingleStream: { ...defaultState },
  createToken: { ...defaultState },
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getStreams: [''],
  getStreamsSuccess: ['data'],
  getStreamsFailure: ['error'],
  getSingleStream: ['id'],
  getSingleStreamSuccess: ['data'],
  getSingleStreamFailure: ['error'],
  postCreateToken: ['id', 'role'],
  postCreateTokenSuccess: ['data'],
  postCreateTokenFailure: ['error'],
})

export const StreamTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const getStreams = (state) => ({
  ...state,
  getStreams: {
    fetching: true,
    data: null,
    error: null,
  },
})

export const getStreamsSuccess = (state, { data }) => ({
  ...state,
  getStreams: {
    fetching: false,
    data: data,
    error: null,
  },
})

export const getStreamsFailure = (state, error) => ({
  ...state,
  getStreams: {
    fetching: false,
    data: null,
    error,
  },
})

export const getSingleStream = (state) => ({
  ...state,
  getSingleStream: {
    fetching: true,
    data: null,
    error: null,
  },
})

export const getSingleStreamSuccess = (state, { data }) => ({
  ...state,
  getSingleStream: {
    fetching: false,
    data: data,
    error: null,
  },
})

export const getSingleStreamFailure = (state, error) => ({
  ...state,
  getSingleStream: {
    fetching: false,
    data: null,
    error,
  },
})

export const postCreateToken = (state) => ({
  ...state,
  createToken: {
    fetching: true,
    data: null,
    error: null,
  },
})

export const postCreateTokenSuccess = (state, { data }) => ({
  ...state,
  createToken: {
    fetching: false,
    data: data,
    error: null,
  },
})

export const postCreateTokenFailure = (state, error) => ({
  ...state,
  createToken: {
    fetching: false,
    data: null,
    error,
  },
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_STREAMS]: getStreams,
  [Types.GET_STREAMS_SUCCESS]: getStreamsSuccess,
  [Types.GET_STREAMS_FAILURE]: getStreamsFailure,
  [Types.GET_SINGLE_STREAM]: getSingleStream,
  [Types.GET_SINGLE_STREAM_SUCCESS]: getSingleStreamSuccess,
  [Types.GET_SINGLE_STREAM_FAILURE]: getSingleStreamFailure,
  [Types.POST_CREATE_TOKEN]: postCreateToken,
  [Types.POST_CREATE_TOKEN_SUCCESS]: postCreateTokenSuccess,
  [Types.POST_CREATE_TOKEN_FAILURE]: postCreateTokenFailure,
})
