import { SET_POINTER } from '../actions/constants'

const PointerReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_POINTER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default PointerReducer