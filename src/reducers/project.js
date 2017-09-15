import { OPEN_PROJECT, CLOSE_PROJECT } from '../actions/constants'

const ProjectReducer = (state = {}, action) => {
  switch(action.type) {
    case OPEN_PROJECT:
      return { state: true, current: action.payload }

    case CLOSE_PROJECT:
      return { state: false, current: {} }
    default:
      return state
  }
}

export default ProjectReducer