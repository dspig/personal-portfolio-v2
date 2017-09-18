import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setPointer } from '../../actions/set_pointer'
import SectionTitle from '../SectionTitle'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', phone: '', message: '' }
  }

  componentDidMount() { this.props.setPointer({ contact: this.contact }) }
  handleName = ({ target }) => this.setState({ name: target.value })
  handleEmail = ({ target }) => this.setState({ email: target.value })
  handlePhone = ({ target }) => this.setState({ phone: target.value })
  handleMessage = ({ target }) => this.setState({ message: target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone, message } = this.state
    const data = { name, email, phone, message }

    axios.post('http://formspree.io/2kinsight16@gmail.com', data)
      .then(res => {
        alert('form submitted successfully')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const inputProps = {
      type: 'text',
      className: 'form-control'
    }
    const { 
      handleName, handleEmail, 
      handlePhone, handleMessage, handleSubmit
    } = this

    return (
      <section className='contact-wrapper' ref={el => { this.contact = el }}>
        <div className='container'>
          <SectionTitle main='Contact' sub='Contact me if you need to know more' />
          <form className='form' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-sm-12 col-lg-6'>
                <div className='form-group inputs'>
                  <input 
                    {...inputProps} 
                    placeholder='YOUR NAME' 
                    onChange={handleName}
                    required 
                  />
                  <input 
                    {...inputProps} 
                    placeholder='YOUR EMAIL' 
                    onChange={handleEmail}
                    required 
                  />
                  <input 
                    {...inputProps} 
                    placeholder='YOUR PHONE' 
                    onChange={handlePhone}
                    required 
                  />
                </div>
              </div>
              <div className='col-sm-12 col-lg-6'>
                <div className='form-group textarea'>
                  <textarea 
                    rows={20}
                    className='form-control' 
                    placeholder='MESSAGE BODY'
                    onChange={handleMessage}
                    required
                  />
                </div>
              </div>
            </div>
            <button className='btn btn-primary'>Send</button>
          </form>
        </div>
      </section>
    )
  }
}

export default connect(null, { setPointer })(Contact)