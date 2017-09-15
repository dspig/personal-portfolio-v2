import { OPEN_PROJECT } from './constants'

import { projects } from '../assets/scripts/projects'

export const openProject = (index) => {
  return {
    type: OPEN_PROJECT,
    payload: projects[index]
  }
}