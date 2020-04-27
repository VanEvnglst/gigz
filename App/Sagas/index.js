import { all } from 'redux-saga/effects'
import watchUser from './UserSaga'

export default function* root() {
  yield all([watchUser()])
}
