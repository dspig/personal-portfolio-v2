import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
      <div className='container'>
        <div className='brand'>Brandon Achu</div>
        <div className='menu'>
          <a to='/' className='active'>
            <li>Home</li>
          </a>
          <a to='/projects' className=''>
            <li>Projects</li>
          </a>
          <a to='/about' className=''>
            <li>About</li>
          </a>
          <a to='/contact' className=''>
            <li>Contact</li>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar