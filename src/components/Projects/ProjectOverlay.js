import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeProject } from '../../actions/close_project'

import test from '../../assets/non-svg/home.jpeg'

class ProjectOverlay extends Component {
  handleClose = () => this.props.closeProject()

  render() {
    const { state, current } = this.props.projectState || {}
    const { image, name, description } = current || {}
    const currentState = state ? 'active' : ''
    const classname = `project-overlay ${currentState}`

    return (
      <div className={classname}>
        <i 
          className='fa fa-times' 
          aria-hidden='true' 
          onClick={this.handleClose}
        />
        <div className='container'>
          <div className='heading'>
            <h2>{ name }</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <img src={test} className='img-fluid' alt='project alt' />
          <hr className='divider' />
          <div>
            <p>{ description }</p>
            <button 
              className='btn btn-primary' 
              onClick={this.handleClose}>
              Close Project
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ projectState }) => {
  return { projectState }
}

export default connect(mapStateToProps, { closeProject })(ProjectOverlay)