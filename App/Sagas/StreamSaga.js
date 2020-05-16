import { put, call, takeLatest, select } from 'redux-saga/effects'
import { api } from 'App/Services/api'

import StreamActions, { StreamTypes } from 'App/Redux/StreamRedux'

const getSignin = (state) => state.user
function* getVerifyToken() {
  const auth = yield select(getSignin)

  return auth.accessToken
}

const doGetSingleStream = ({ id, token }) => {
  return api.get(`/live_streams/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Type': 'Audience',
      'X-Access-Token': token,
    },
  })
}

export function* getSingleStream({ id }) {
  try {
    const token = yield getVerifyToken()
    const response = yield call(doGetSingleStream, { id, token })
    if (response.status === 200) {
      yield put(StreamActions.getSingleStreamSuccess(response.data))
    } else {
      yield put(StreamActions.getSingleStreamFailure(response.data))
    }
  } catch (error) {
    console.log(error)
    yield put(StreamActions.getSingleStreamFailure(error.message))
  }
}

const doGetStreams = ({ token }) => {
  return api.get('/live_streams', {
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Type': 'Audience',
      'X-Access-Token': token,
    },
  })
}

export function* getStreams() {
  try {
    const token = yield getVerifyToken()
    const response = yield call(doGetStreams, { token })
    if (response.status === 200) {
      yield put(StreamActions.getStreamsSuccess(response.data))
    } else {
      yield put(StreamActions.getStreamsFailure(response.data))
    }
  } catch (error) {
    yield put(StreamActions.getStreamsFailure(error.message))
  }
}

const doPostCreateToken = ({ id, token, role }) => {
  return api.post(
    `/live_streams/${id}/generate_token`,
    { role },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Access-Type': 'Audience',
        'X-Access-Token': token,
      },
    }
  )
}

export function* postCreateToken({ id, role }) {
  try {
    const token = yield getVerifyToken()
    const response = yield call(doPostCreateToken, { id, role, token })
    if (response.status === 200) {
      yield put(StreamActions.postCreateTokenSuccess(response.data))
    } else {
      yield put(StreamActions.postCreateTokenFailure(response.data))
    }
  } catch (error) {
    yield put(StreamActions.postCreateTokenFailure(error.message))
  }
}

function* watchStream() {
  yield takeLatest(StreamTypes.GET_STREAMS, getStreams)
  yield takeLatest(StreamTypes.GET_SINGLE_STREAM, getSingleStream)
  yield takeLatest(StreamTypes.POST_CREATE_TOKEN, postCreateToken)
}

export default watchStream
