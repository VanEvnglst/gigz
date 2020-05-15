import { createReducer, createActions } from 'reduxsauce'

/* ------------- Initial State ------------- */
const defaultState = {
  fetching: false,
  data: null,
  error: null,
}

export const INITIAL_STATE = {
  getStreams: { ...defaultState },
}

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getStreams: [''],
  getStreamsSuccess: ['data'],
  getStreamsFailure: ['error'],
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_STREAMS]: getStreams,
  [Types.GET_STREAMS_SUCCESS]: getStreamsSuccess,
  [Types.GET_STREAMS_FAILURE]: getStreamsFailure,
})
