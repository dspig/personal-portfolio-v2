import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPointer } from '../../actions/set_pointer'
import scrollToComponent from 'react-scroll-to-component'

class Home extends Component {
  componentDidMount() { this.props.setPointer({ home: this.home }) }
  handleScroll = () => {
    scrollToComponent(this.props.pointers.projects, {
      offset: 0,
      align: 'top',
      duration: 1500
    })
  }

  render() {
    return (
      <section className='home-wrapper' ref={el => { this.home = el }}>
        <div className='overlay'>
          <div className='content'>
            <div className='heading container'>
              <h2>Junior Software Developer</h2>
              <h1>HELLO, I'M BRANDON</h1>
              <button
                onClick={this.handleScroll}
                className='btn btn-primary'>
                Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ pointers }) => {
  return { pointers }
}

export default connect(mapStateToProps, { setPointer })(Home)