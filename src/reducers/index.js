import { combineReducers } from 'redux'
import ProjectReducer from './project'
import PointerReducer from './pointer'

const rootReducer = combineReducers({
  projectState: ProjectReducer,
  pointers: PointerReducer
})

export default rootReducer