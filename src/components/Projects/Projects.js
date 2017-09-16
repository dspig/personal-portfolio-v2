import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openProject } from '../../actions/open_project'
import SectionTitle from '../SectionTitle'
import ProjectOverlay from './ProjectOverlay'

import { projects } from '../../assets/scripts/projects'

class Projects extends Component {
  handleProject = index => this.props.openProject(index)

  renderProjects() {
    return Object.keys(projects).map((project, i) => {
      const { image, name } = projects[project]
      const img = require(`../../assets/images/${image}`)

      return (
        <div key={i} className='col-sm-12 col-md-6 col-lg-4 project-card'>
          <div className='card' onClick={() => this.handleProject(i)}>
            <div className='overlay'>
              <i className='fa fa-plus' aria-hidden='true' />
            </div>
            <img 
              alt='project screenshot'
              className='card-img-top' 
              src={img}
            />
            <div className='card-block'>
              <h4 className='text-center'>{ name }</h4>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <section className='projects-wrapper'>
        <ProjectOverlay />
        <div className='container'>
          <SectionTitle main='Projects' sub />
          <div className='row'>
          { this.renderProjects() }
          </div>
        </div>
      </section>
    )
  }
}

export default connect(null, { openProject })(Projects)