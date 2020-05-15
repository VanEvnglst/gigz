import { put, call, takeLatest, select } from 'redux-saga/effects'
import { api } from 'App/Services/api'

import StreamActions, { StreamTypes } from 'App/Redux/StreamRedux'

const getSignin = (state) => state.user
function* getVerifyToken() {
  const auth = yield select(getSignin)

  return auth.accessToken
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

function* watchStream() {
  yield takeLatest(StreamTypes.GET_STREAMS, getStreams)
}

export default watchStream
