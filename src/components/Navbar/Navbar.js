import React, { Component } from 'react'
import { connect } from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'

class Navbar extends Component {
  handleScroll = (target) => {
    const reference = this.props.pointers[target]
    scrollToComponent(reference, {
      offset: 0,
      align: 'top',
      duration: 1500
    })
  }

  render() {
    const { handleScroll } = this

    return (
      <div className='navbar-wrapper'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <a className='navbar-brand' href='#'>Brandon Achu</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item active' onClick={() => handleScroll('home')}>
                  <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                </li>
                <li className='nav-item' onClick={() => handleScroll('about')}>
                  <a className='nav-link' href='#'>About</a>
                </li>
                <li className='nav-item' onClick={() => handleScroll('projects')}>
                  <a className='nav-link' href='#'>Projects</a>
                </li>
                <li className='nav-item' onClick={() => handleScroll('contact')}>
                  <a className='nav-link' href='#'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = ({ pointers }) => {
  return { pointers }
}

export default connect(mapStateToProps)(Navbar)