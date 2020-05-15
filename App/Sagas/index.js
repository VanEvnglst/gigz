import { all } from 'redux-saga/effects'
import watchUser from './UserSaga'
import watchStream from './StreamSaga'

export default function* root() {
  yield all([watchUser(), watchStream()])
}
