import { combineReducers } from 'redux'
import ProjectReducer from './project'

const rootReducer = combineReducers({
  projectState: ProjectReducer
})

export default rootReducer