import React from 'react'

const Home = () => (
  <section className='home-wrapper'>
    <div className='overlay'>
      <div className='content'>
        <div className='heading container'>
          <h2>Junior Software Developer</h2>
          <h1>HELLO, I'M BRANDON</h1>
          <a to='/about'>
            <button className='btn btn-primary'>About</button>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Home