import { put, call, takeLatest } from 'redux-saga/effects'
import { api } from 'App/Services/api'

import UserActions, { UserTypes } from 'App/Redux/UserRedux'

const doPostLogin = ({ payload }) => {
  console.log(payload)
  /*
  return api.post('/login', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  */
}

export function* postLogin(payload) {
  console.log(payload, 'payload')
  try {
    const response = yield call(doPostLogin, { payload })
    if (response.status === 200) {
      yield put(UserActions.postLoginSuccess(response.data.data))
    } else {
      yield put(UserActions.postLoginFailure(response.data))
    }
  } catch (error) {
    yield put(UserActions.postLoginFailure(error.message))
  }
}

function* watchUser() {
  yield takeLatest(UserTypes.POST_LOGIN, doPostLogin)
}

export default watchUser
