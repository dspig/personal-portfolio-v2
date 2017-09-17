import { SET_POINTER } from './constants'

export const setPointer = (ref) => {
  return {
    type: SET_POINTER,
    payload: ref
  }
}