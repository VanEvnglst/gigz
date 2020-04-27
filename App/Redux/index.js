import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as userReducer } from './UserRedux'

export const mainReducer = combineReducers({
  user: userReducer,
})

export default () => {
  const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
      state = undefined
    }
    return mainReducer(state, action)
  }

  return configureStore(rootReducer, rootSaga)
}
