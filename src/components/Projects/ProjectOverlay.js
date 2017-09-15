import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeProject } from '../../actions/close_project'

import test from '../../assets/images/home.jpeg'

class ProjectOverlay extends Component {
  handleClose = () => this.props.closeProject()
  renderVideo = (image, video) => {
    if(!video) return
    
    const format = video.split('.')[1]
    const type = `video/${format}`

    const vidProps = {
      controls: true,
      autoPlay: true,
      loop: true,
      poster: `../../assets/images/${image}`,
      className: 'embed-responsive-item'
    }

    return (
      <div className='embed-responsive embed-responsive-16by9'>
        <video {...vidProps}>
          <source src={require(`../../assets/videos/${video}`)} type={type} />
        </video>
      </div>
    )
  }

  render() {
    const { state, current } = this.props.projectState || {}
    const { image, video, name, description } = current || {}
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
          { this.renderVideo(image, video) }
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