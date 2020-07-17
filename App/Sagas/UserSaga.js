import { put, call, takeLatest } from 'redux-saga/effects';
import { api } from 'App/Services/api';

import UserActions, { UserTypes } from 'App/Redux/UserRedux';

const doPostLogin = (audience) => {
  return api.post('/audiences/login', audience, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export function* postLogin({ audience }) {
  try {
    const response = yield call(doPostLogin, { audience });
    if (response.status === 200) {
      yield put(UserActions.postLoginSuccess(response.data));
    } else {
      yield put(UserActions.postLoginFailure(response.data));
    }
  } catch (error) {
    yield put(UserActions.postLoginFailure(error.message));
  }
}

const doPostVerifyNumber = (audience) => {
  return api.post('/audience_verifications', audience, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export function* postVerifyNumber({ audience_verification }) {
  try {
    const response = yield call(doPostVerifyNumber, { audience_verification });
    if (response.status === 200) {
      yield put(UserActions.postVerifyNumberSuccess(response.data));
    } else {
      yield put(UserActions.postVerifyNumberFailure(response.data));
    }
  } catch (error) {
    yield put(UserActions.postVerifyNumberFailure(error.message));
  }
}

function* watchUser() {
  yield takeLatest(UserTypes.POST_LOGIN, postLogin);
  yield takeLatest(UserTypes.POST_VERIFY_NUMBER, postVerifyNumber);
}

export default watchUser;
