import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', phone: '', message: '' }
  }

  handleName = ({ target }) => this.setState({ name: target.value })
  handleEmail = ({ target }) => this.setState({ email: target.value })
  handlePhone = ({ target }) => this.setState({ phone: target.value })
  handleMessage = ({ target }) => this.setState({ message: target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    // const { name, email, phone, message } = this.state
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
      <section className='contact-wrapper'>
        <div className='container'>
          <SectionTitle main='Contact' sub />
          <form className='form' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-sm-12 col-lg-6'>
                <div className='form-group inputs'>
                  <input 
                    {...inputProps} 
                    placeholder='YOUR NAME' 
                    onChange={handleName} 
                  />
                  <input 
                    {...inputProps} 
                    placeholder='YOUR EMAIL' 
                    onChange={handleEmail} 
                  />
                  <input 
                    {...inputProps} 
                    placeholder='YOUR PHONE' 
                    onChange={handlePhone} 
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