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
      <nav className='navbar-wrapper'>
        <div className='container'>
          <div className='brand'>Brandon Achu</div>
          <div className='menu'>
            <a className='active' onClick={() => handleScroll('home')}>
              <li>Home</li>
            </a>
            <a onClick={() => handleScroll('about')}>
              <li>About</li>
            </a>
            <a onClick={() => handleScroll('projects')}>
              <li>Projects</li>
            </a>
            <a onClick={() => handleScroll('contact')}>
              <li>Contact</li>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ pointers }) => {
  return { pointers }
}

export default connect(mapStateToProps)(Navbar)